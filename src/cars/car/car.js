import React, {useEffect} from 'react';

const Car = ({car}) => {
    const {id,brand,price,year} = car;
    return (
        <div>
            <div> id:{id}</div>
            <div> brand:{brand}</div>
            <div> price:{price}</div>
            <div> year:{year}</div>
            <button>Update</button>
            <button>Delete</button>
            <br/> <hr/>
        </div>
    );
};

export default Car;