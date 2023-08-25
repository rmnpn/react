import './characters.css'

import React from 'react';
import Rickandmorty from "../rickandmorty/rickandmorty";

const Characterrick = ({rick:familypart}) => {
    return (
        <div className='mainblock'>
            <h1>Rick and morty</h1>
            {
                familypart.map (value => (<Rickandmorty rickpart={value}/> ))
            }

        </div>
    );
};

export default Characterrick;