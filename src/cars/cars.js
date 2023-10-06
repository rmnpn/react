import React, {useEffect, useState} from 'react';
import {carService} from "../service/axios";

const Cars = () => {
    const [cars,setCars] = useState([]);
    useEffect(() => {
        carService.getAll().then()
    }, []);
    return (
        <div>
            
        </div>
    );
};

export default Cars;