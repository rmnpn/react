import React, {useContext, useEffect} from 'react';
import {carService} from "../service/axios";
import Car from "./car/car";
import {Context} from "../App";
const Cars = () => {
    const {cars,setCars,newCar} = useContext(Context)
    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    }, [newCar]);
    return (
        <div>
            {
                cars.map(car => (<Car car={car} key={car.id}/>))
            }
        </div>
    );
};

export default Cars;