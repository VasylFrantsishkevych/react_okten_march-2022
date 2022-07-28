import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {carAction} from "../../redux";
import {Car} from "../Car/Car";

const Cars: FC = () => {

    const {cars} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carAction.getAll())
    })
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars}
