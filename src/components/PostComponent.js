import React from 'react';

const PostComponent = ({item,choosePost}) => {

    return (
        <div>
            <h2> {item.id} {item.title}</h2>
            <button onClick ={()=>{
                choosePost(item.id)}}>Details</button>
        </div>
    );
};

export default PostComponent;