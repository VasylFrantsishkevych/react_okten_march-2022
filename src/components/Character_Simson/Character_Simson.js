import React from 'react';

import './Character_Simson.css';

const CharacterSimson = (props) => {

    const { name, description, image} = props;

    return (
        <div className={'container'}>
            <h1>{name}</h1>
            <p>{description}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default CharacterSimson;
