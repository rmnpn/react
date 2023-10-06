import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../service/axios";
import {Context} from "../App";

const Form = () => {
    const {setNewCar} = useContext(Context)
    const {register, handleSubmit, reset, setValue} = useForm();
    const save = async car => {
        await carService.create(car)
        reset()
        setNewCar(car)
    };
    return (
        <form onSubmit={handleSubmit(save)}>
            <label>
                <input type={"text"} placeholder={'brand'} {...register('brand')}/>
                <input type={"number"} placeholder={'price'} {...register('price')}/>
                <input type={"number"} placeholder={'year'} {...register('year')}/>
                <button>Save</button>
            </label>
        </form>
    );
};

export default Form;