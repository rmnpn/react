import React from 'react';
import {useForm} from "react-hook-form";

const Form = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const save = ()=> {

    }
    return (
        <form onSubmit={handleSubmit()}>
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