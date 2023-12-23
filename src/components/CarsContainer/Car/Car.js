import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../../redux/slices/carsSlice";

const Car = ({car}) => {
    const dispatch = useDispatch();
    const {id, brand, price, year} = car;
    return (<div>
        <div> id : {id}</div>
        <div> brand : {brand}</div>
        <div> price : {price}</div>
        <div> year : {year}</div>
        <button onClick={()=> dispatch(carActions.setCarForUpdate(car))}>Update</button>
        <button onClick={()=> dispatch(carActions.deleteCar({id}))}>Delete</button>
    </div>);
};

export {Car};

