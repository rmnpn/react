import React, {useEffect, useState} from 'react';
import ApiService from "../services/ApiService";
import Comment from "./component/Comment";
import {Outlet} from "react-router-dom";




const Comments = () => {
    const apiService = new ApiService('comments');
    const [comments, setComments] = useState([]);
    useEffect(() => {
        apiService.getAllData().then(value=>setComments(value))
    }, []);
    return (
        <div>
            <Outlet/>
            {
                comments.map(comment=>(<Comment comment={comment} key={comment.id}/> ))
            }

        </div>
    );
};

export default Comments;