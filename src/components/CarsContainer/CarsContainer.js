import React from 'react';
import CarForm from "./CarForm/CarForm";
import Cars from "./Cars/Cars";
import {useSelector} from "react-redux";

const CarsContainer = () => {
    const {isLoading,errors} = useSelector(state => state.cars2);
    return (
        <div>
            <CarForm/>
            <hr/>
            {isLoading && <h1>Loading-хуйоадінg</h1>}
            {errors && <h1>{JSON.stringify(errors)}</h1>}
            <Cars/>
        </div>
    );
};

export default CarsContainer;