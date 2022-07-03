import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services";

const FormNewUsers = () => {

    const {register, handleSubmit} = useForm();

    let submit = (data) => {
        userService.createUser(data).then(value => console.log(value))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={"name"} {...register('name')}/>
                <input type="text" placeholder={"username"}{...register('username')}/>
                <input type="text" placeholder={"email"} {...register('email')}/>
                <input type="text" placeholder={"phone"} {...register('phone')}/>
                <button>SAVE</button>
            </form>
        </div>
    );
};

export {FormNewUsers};
