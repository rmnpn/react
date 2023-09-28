import React from 'react';
import {useForm} from "react-hook-form";

const Form = ({setOnSave}) => {
    const {register, handleSubmit, reset} = useForm();
    const save = (data) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data),
            method: 'POST'
        }).then(value => value.json())
            .then(value=> {setOnSave(prev => [...prev, value])
                reset()
    })
}
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <label><input type="text" placeholder={'name'} {...register('name')} /> </label>
                <label><input type="text" placeholder={'username'} {...register('username')} /> </label>
                <label><input type="email" placeholder={'email'} {...register('email')} /> </label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;