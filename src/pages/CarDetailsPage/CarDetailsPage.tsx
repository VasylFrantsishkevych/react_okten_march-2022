import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppLocation} from "../../hooks";
import {ICar} from "../../interfaces";
import {carService} from "../../services";
import {CarDetails} from "../../components";


const CarDetailsPage: FC = () => {
    const {id} = useParams<{id: string}>();
    const {state} = useAppLocation<ICar>();
    const [car, setCar] = useState<ICar|null>(null);

    useEffect(() => {
        if (state) {
            setCar(state)
        }else {
            carService.getById(+id!).then(({data}) => setCar(data))
        }
    }, [id, state])
    return (
        <div>
            {
                car && <CarDetails car={car} key={car.id}/>
            }
        </div>
    );
};

export {CarDetailsPage}
