import React from 'react';

import './CarStyle.css';
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car}) => {

    const {id, model, price, year} = car;

    const dispatch = useDispatch();
    return (
        <div className={'car_card'}>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</button>
            <button onClick={() => dispatch(carActions.deleteCarById({id}))}>Delete</button>
        </div>
    );
};

export {Car};
