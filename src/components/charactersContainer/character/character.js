import React from 'react';

const Character = ({character}) => {
    const {id,name,species,gender} = character;
    return (
        <div>
            <div> id: {id}</div>
            <div> name: {name}</div>
            <div> species: {species}</div>
            <div> gender: {gender}</div>
        </div>

    );
};

export default Character;