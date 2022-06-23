import React from 'react';

import './Launch.style.css';

const Launch = ({launch}) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = launch;

    return (
        <div className={'launch'}>
            <h3>{mission_name} - {launch_year}</h3>
            <div className={'image'}>
                <img src={mission_patch_small} alt={mission_name}/>
            </div>
        </div>
    );
};

export default Launch;
