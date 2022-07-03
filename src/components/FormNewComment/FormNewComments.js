import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../services/comments.service";

const FormNewComments = () => {
    const {register, handleSubmit} = useForm();

    const submit = (data) => {
        commentService.createComment(data).then(value => console.log(value))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={"name"} {...register('name')}/>
                <input type="text" placeholder={"body"}{...register('body')}/>
                <input type="text" placeholder={"email"} {...register('email')}/>
                <button>SAVE</button>
            </form>
        </div>
    );
};

export default FormNewComments;
