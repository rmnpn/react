import React, {useEffect, useState} from 'react';
import Post from "./post/post";

const Posts = ({userId}) => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
            // eslint-disable-next-line no-template-curly-in-string
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(value => value.json())
                .then(post => setPosts(post))
        },
        [userId]);
    return (
        <div>
            { posts.map(post=> <Post key={post.id} post={post}/>) }
        </div>
    );
};

export default Posts;