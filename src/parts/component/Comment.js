import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams, useSearchParams} from "react-router-dom";


const Comment = ({comment}) => {
    // eslint-disable-next-line no-restricted-globals
    const [params, setParams] = useSearchParams();
    // history.push(useLocation().pathname+`?id=${comment.id}`)
    const {id, name, postId} = comment;
    const handler = () => {
        setParams({id: comment.id})
    }
     const paramsId = params.get('id');
    return (
        <>
            <div>
                {id} - <button onClick={handler}> {name} </button> <Link to={'/posts'} state={postId}>Watch post</Link>
            </div>
            {paramsId && +paramsId === comment.id && comment.body}
        </>
    );
};

export default Comment;