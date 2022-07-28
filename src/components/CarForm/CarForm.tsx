import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carAction} from "../../redux";

const CarForm: FC = () => {

    const {register, reset, handleSubmit, setValue} = useForm<ICar>()
    const dispatch = useAppDispatch();
    const {updateCar} = useAppSelector(state => state.cars);

    useEffect(() => {
        if (updateCar) {
            setValue('model', updateCar.model)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    },[updateCar,setValue])

    const submit: SubmitHandler<ICar> = async (data) => {
        if (updateCar){
            await dispatch(carAction.updateCar({car: data, id: updateCar.id}))
        }else {
            await dispatch(carAction.createCar({car: data}))
        }
        reset();
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button>{updateCar?'Update':'Create'}</button>
        </form>
    );
};

export {CarForm}
