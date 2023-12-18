import React from 'react';
import {useNavigate} from "react-router-dom";

const Character = ({character}) => {

    const {id, name, image} = character;
    return (
        <div>
            <div> id:{id}</div>
            <div> name:{name}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Character;