import React, {useEffect, useState} from 'react';

import './CarsStyle.css';
import {carService} from "../../services";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {

    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [])

    const addCar = (car) => {
        setCars([...cars, car])
    }

    const deleteCar = async (id) => {
        await carService.delete(id)
        const res = [...cars]
        const index = res.findIndex(value => value.id === id);
        if (index !== -1) {
            res.splice(index, 1)
            setCars(res)
        }
    }

    const updateCar = (car) => {
        const res = [...cars];
        const find = res.find(value => value.id === carForUpdate.id)

        if (find) {
            Object.assign(find, car)
            setCars(res)
            setCarForUpdate(null)
        }
    }
    return (
        <div className={'wrap'}>
            <CarForm addCar={addCar} carForUpdate={carForUpdate} updateCar={updateCar}/>
            <div className={'cars'}>
                {
                    cars.map(car => <Car key={car.id} car={car} deleteCar={deleteCar} setCarForUpdate={setCarForUpdate}/>)
                }
            </div>
        </div>
    );
};

export {Cars};
