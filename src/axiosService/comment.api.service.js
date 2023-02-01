import axios from 'axios';

let axiosInstance= axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/comments',
    headers:{'Content-type': 'application/json; charset=UTF-8',}
});
const saveComment= (data)=> axiosInstance.post('',{data:data});

export{saveComment}