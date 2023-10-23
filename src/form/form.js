import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../service/axios";
import {Context} from "../App";
import car from "../cars/car/car";

const Form = () => {
    const {setNewCar, carForUpdate, setCarForUpdate} = useContext(Context)
    const {register, handleSubmit, reset, setValue} = useForm();
    if (carForUpdate) {
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    }
    const save = async (car) => {
        await carService.create(car)
        reset()
        setNewCar(car)
    };

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        reset();
        setCarForUpdate(null);
        setNewCar(car)
    }
    return (
        <form onSubmit={handleSubmit(!carForUpdate ? save : update)}>
            <label>
                <input type={"text"} placeholder={'brand'} {...register('brand')}/>
                <input type={"number"} placeholder={'price'} {...register('price')}/>
                <input type={"number"} placeholder={'year'} {...register('year')}/>
                <button>{!carForUpdate?'Save':'Update'}</button>
            </label>
        </form>
    );
};

export default Form;