import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";

const Form = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const save = ()=> {
        useEffect(() => {
            axios.create(save)
        }, []);
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <label>
                 <input type={"text"} placeholder={'name'}{...register('name')}/>
                 <input type={"text"} placeholder={'username'}{...register('username')}/>
                 <input type={"email"} placeholder={'email'}{...register('email')}/>
                <button>Save</button>
            </label>
        </form>
    );
};

export default Form;