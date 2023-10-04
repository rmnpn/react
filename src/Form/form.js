import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../Users/userService";

const Form = ({setUsers}) => {
    const {register, handleSubmit, reset} = useForm();
    const save = () => async (user) => {
        try {
            await userService.create(user);
            setUsers(prev=>[...prev,user]);
            reset();
        }
        catch (e) {
            console.log(e)
        }
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