import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";


const Form = ({setOnSave, carForUpdate, setCarForUpdate}) => {

    const {register, handleSubmit, reset, setValue} = useForm();
    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])
    const save = (data) => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data),
            method: 'POST'
        })
            .then(value => console.log(value.status))
            .then(() => {
                setOnSave(prev => !prev)
                reset()
            })
    }

    const update = (car) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carForUpdate.id}`,
            {
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(car),
                method: 'PUT'
            })
            .then(value => value.json())
            .then(() => {
                setOnSave(prev => !prev)
                setCarForUpdate(null)
                reset()
            })
    }
    return (
        <form onSubmit={handleSubmit(!carForUpdate ? save : update)}>
            <label><input type="text" placeholder={'brand'} {...register('brand')}/> < /label>
            <label><input type="number" placeholder={'price'} {...register('price')}/> < /label>
            <label><input type="number" placeholder={'year'} {...register('year')}/> < /label>
            <button>Save</button>
        </form>
    );
};

export default Form;