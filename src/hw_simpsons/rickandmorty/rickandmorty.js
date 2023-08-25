import React from 'react';

const Rickandmorty = ({rickpart}) => {
    return (
        <div>
            <h3> {rickpart.id}. {rickpart.name} </h3>
            <img src={rickpart.image}/>
            <p> STATUS - {rickpart.status}</p>
            <p> GENDER - {rickpart.gender}</p>
            <p> SPECIES - {rickpart.species}</p>
        </div>
    );
};

export default Rickandmorty;