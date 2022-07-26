import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import './CarFormStyle.css';
import {carActions} from "../../redux";

const CarsForm = () => {
    const {reset, register, handleSubmit, setValue} = useForm();
    const {carForUpdate, errors} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    },[carForUpdate, setValue])

    const submit = async (data) => {
        let newCar;
        if (carForUpdate) {
            newCar = await carActions.updateById({id: carForUpdate.id, car: data})
            reset();
        } else {
            newCar = await carActions.createCar({car: data})
            reset();
        }
        dispatch(newCar)
    };

    return (
        <div className={'car_form'}>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                {/*{errors && <div>{errors}</div>}*/}
                <input type="number" placeholder={'price'} {...register('price')}/>
                <input type="number" placeholder={'year'} {...register('year')}/>
                <button>{carForUpdate?'Update':'Create'}</button>
            </form>
        </div>
    );
};

export {CarsForm};
