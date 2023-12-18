import React from 'react';
import css from './Episode.module.css'
import {useNavigate} from "react-router-dom";

const Episode = ({episode}) => {
    const navigate = useNavigate();
    const {id, name, episode: chapter, characters} = episode;
    return (
        <div className={css.Episode} onClick={()=> navigate('/characters', {state: {ids:characters}})}> {/*навігація на сторінки з песонажами*/}
            <div> id:{id}</div>
            <div> name:{name}</div>
            <div> chapter:{chapter}</div>
        </div>
    );
};

export default Episode;