import React from 'react';
const UserComponent = ({item,chooseUser}) => {

    return (
        <div>
            <h3>{item.id} {item.name}</h3>
            <button onClick={()=>{
                chooseUser(item.id)}}> User posts</button>
        </div>
    );
};

export default UserComponent;