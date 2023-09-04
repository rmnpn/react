import React, {useEffect, useState} from 'react';
import Post from "../post/post";
const Posts = ({infopost}) => {

let [posts,setPosts] = useState([]);
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(allPosts => setPosts(allPosts))
}, []);
return (
    <div>
        {
            posts.map(value => (<Post post = {value}
                infopost = {infopost}
                key = {value.id}
                />)
                )
        }
    </div>
);

};
export default Posts;
