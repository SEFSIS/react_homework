import './App.css';
import {useEffect, useState} from "react";
import PostComponent from "./components/PostComponent";
import {getPosts} from "./services/Posts";
import {getPost} from "./services/Posts";
import UserComponent from "./components/UserComponent";
import {getUser, getUsers} from "./services/Users";
import React from ".";


function App() {
    const [data, setData] = useState([]);

    const apiGet = () => {
        fetch(`https://api.spacexdata.com/v3/launches/`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
            })
    }
    let [users, setUsers] = useState([]);
    let [chosenUser, setChosenUser] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUsers(value));
    }, []);

    const chooseUser = (id) => {

        getUser(id).then(value => setChosenUser(value));
    }

    let [posts, setPosts] = useState([]);
    let [chosenPost, setChosenPost] = useState(null)


    useEffect(() => {
        getPosts().then(value => setPosts(value));
    }, []);
    const choosePost = (id) => {
        getPost(id).then(value => setChosenPost(value));
    }

    return (

        <div>
            <h2>SPACE X</h2>
            <button onClick={apiGet}> Fetch API</button>
            <div>
                <ul>
                    {data.filter(data => data.launch_year !== '2020').map(item =>
                        <li key={item.id}>{item.mission_name} {item.launch_year}
                            <div><img src={item.links.mission_patch_small} alt={item.links.mission_patch_small}/></div>
                        </li>)
                    }
                </ul>
            </div>
            <h2>USERS</h2>

            <div>{chosenUser?.title}</div>

            <hr/>
            {
                users.map(value =>
                    <UserComponent
                        key={value.id}
                        item={value}
                        chooseUser={chooseUser}
                    />)
            }
            <h2>POSTS</h2>
            <div>{chosenPost?.body}</div>
            <hr/>

            {posts.map(value => <PostComponent
                key={value.id}
                item={value}
                choosePost={choosePost}/>)
            }
        </div>
    );
}

export default App;