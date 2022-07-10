import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import './CarFormStyle.css';
import {carService} from "../../services";

const CarForm = ({addCar, carForUpdate, updateCar}) => {
    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm({mode: 'all'});

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    },[carForUpdate])

    const submit = async (newCar) => {
        if (!carForUpdate) {
            const {data} = await carService.create(newCar);
            addCar(data)
        }else {
            const {data} = await carService.update(carForUpdate.id, newCar);
            updateCar(data)
        }
        reset();
    }
    return (
        <div className={'carForm'}>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model', {
                    required: true,
                    pattern: new RegExp(/^[a-zA-ZА-яіІїЇ]{1,20}$/)
                })}/>
                <input type="number" placeholder={'price'} {...register('price', {
                    valueAsNumber: true,
                    required: true,
                    min: 0,
                    max: 1000000
                })}/>
                <input type="number" placeholder={'year'} {...register('year', {
                    valueAsNumber: true,
                    required: true,
                    min: 1990,
                    max: new Date().getFullYear()
                })}/>
                <button>{carForUpdate ? 'Update' : 'Create'}</button>
            </form>
            <div className={'errors'}>
                {errors.model && <span>Тільки букви 1 - 20 символів</span>}
                {errors.price && <span>Ціна може бути від 1 до 1 000 000</span>}
                {errors.year && <span>Рік може бути від 1900 до теперішнього</span>}
            </div>
        </div>
    );
};

export {CarForm};
