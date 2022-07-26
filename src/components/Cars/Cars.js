import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './CarsStyle.css';
import {Car} from "../Car/Car";
import {carActions} from "../../redux";

const Cars = () => {

    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(carActions.getAll())
    },[dispatch])

    return (
        <div className={'cars_container'}>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};
