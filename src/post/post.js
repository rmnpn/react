import React from 'react';

const Post = ({post,infopost}) => {
    return (
        <div>
            <p> id - {post.id} <br/>
                title - {post.title} <br/> </p>
            <button onClick={()=>infopost(post)}>Відкрити пост</button>
        </div>
    );
};

export default Post;