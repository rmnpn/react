import React from 'react';
import './characters.css'
import Simpsons from "../simpsons/simpsons";

const Characters = ({xxx:familypart}) => {
    return (
        <div className='mainblock'>
                            <h1>Simpsons</h1>
            {
                familypart.map (value => (<Simpsons simpson={value}/> ))
            }
        </div>
    );
};

export default Characters;