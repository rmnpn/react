import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../../redux/slices/carsSlice";
import {Car} from "../Car/Car";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars2);
    useEffect(() => {
        dispatch(carActions.all())
    }, []);
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;