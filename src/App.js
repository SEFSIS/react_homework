import React from 'react';
import {useForm} from 'react-hook-form';
import {saveComment} from './axiosService/comment.api.service';


const App = () => {
    // let {register, handleSubmit} = useForm({defaultValues: {name: 'name', email: 'email'}});
    // const onSubmit = (data) => {
    //     console.log(data);
    //
    //
    //     fetch('https://jsonplaceholder.typicode.com/users', {
    //         method: 'POST',
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((json) => console.log(json));
    // }


    let {register, handleSubmit} = useForm({defaultValues: {name: 'name', body:'body',email: 'email'}});
    const onSubmit = (data) => {
        console.log(data);
        saveComment(data).then(({data}) => console.log(data));
    }


    return (
        <div>
            {/*<h2>Add user</h2>*/}
            {/*<hr/>*/}
            {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
            {/*    <input {...register("name", {required: true})}/>*/}
            {/*    <input {...register("email", {required: true})}/>*/}
            {/*    <input type="submit" value={'save user'}/>*/}

                {/*<select{...register("userId")}>*/}
                {/*    <option value="1">1</option>*/}
                {/*    <option value="2">2</option>*/}
                {/*    <option value="3">3</option>*/}
                {/*    <option value="4">4</option>*/}
                {/*    <option value="5">5</option>*/}
                {/*    <option value="6">6</option>*/}
                {/*    <option value="7">7</option>*/}
                {/*    <option value="8">8</option>*/}
                {/*    <option value="9">9</option>*/}
                {/*    <option value="10">10</option>*/}
                {/*</select>*/}
            {/*</form>*/}
            <h2>Add comment</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")}/>
                <input {...register("body",{required: true})}/>
                <input {...register("email", {required: true})}/>
                <input type="submit" value={'save comment'}/>


            </form>


        </div>
    );
};

export default App;