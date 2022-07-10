import React from 'react';

import './CarStyle.css';

const Car = ({car, setCarForUpdate, deleteCar}) => {
    const {id, model, price, year} = car;
    return (
        <div className={'car'}>
            <div>
                <h3>id: {id}</h3>
                <h4>model: {model}</h4>
                <h4>price: {price}</h4>
                <h4>year: {year}</h4>
            </div>
            <div className={'button'}>
                <button onClick={() => setCarForUpdate(car)}>Update</button>
                <button onClick={() => deleteCar(id)}>Delete</button>
            </div>
        </div>
    );
};

export {Car};
