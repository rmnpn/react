import React, {useEffect, useState} from 'react';
import ApiService from "../../services/ApiService";
import {useLocation} from "react-router-dom";

const Post = () => {
    const {state:id} = useLocation();
    console.log(id)
    const apiService = new ApiService('posts');
    const [post, setPost] = useState(null)
    useEffect(() => {
        apiService.getSingleData(id).then(value=>setPost(value))
    }, [id]);
    return (
        <div>
             {post&&post.body}
        </div>
    );
};

export default Post;