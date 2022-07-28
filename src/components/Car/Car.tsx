import React, {FC, ReactNode} from 'react';
import {ICar} from "../../interfaces";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {carAction} from "../../redux";

interface IProps {
    car: ICar,
    children?: ReactNode
}

const Car: FC<IProps> = ({car}) => {
    const {id, model} = car;

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <div>
            <button onClick={() => dispatch(carAction.setCarForUpdate(car))}>update</button>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <button onClick={() => navigate(`&{id}`, {state: car})}>details</button>
        </div>
    );
};

export {Car}
