import React from 'react';

import './Character_RickAndMorty.css';

const CharacterRickAndMorty = (props) => {

    const { id, name, image, status, species, gender} = props;
    return (
        <div className={'card'}>
            <h1>{id} - {name}</h1>
            <img src={image} alt={name}/>
            <p><strong>status:</strong> {status} <strong>species:</strong> {species} <strong>gender:</strong> {gender}</p>
        </div>
    );
};

export default CharacterRickAndMorty;
