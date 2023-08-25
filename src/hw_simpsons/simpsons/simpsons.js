import React from 'react';

const Simpsons = ({simpson}) => {
    return (
        <div>
                <h3> {simpson.name} </h3>
                <img src={simpson.photo}/>
                <p>Вік - {simpson.age} роченяток</p>
                <p>{simpson.info}</p>
        </div>
    );
};

export default Simpsons;