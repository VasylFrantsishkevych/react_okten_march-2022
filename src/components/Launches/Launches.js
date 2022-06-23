import React, {useEffect, useState} from 'react';

import {urls} from "../../configs";
import {Launch} from "../index";
import './Launches.style.css';

const Launches = () => {

    const [launches, setLaunches] = useState([]);

    useEffect( () => {
        fetch(urls.launches)
            .then(res => res.json())
            .then(value => {
                const launchFilter = value.filter(launch => launch.launch_year !== '2020');
                setLaunches(launchFilter);
            });
    },[])

    return (
        <div className={'launches'}>
            {
                launches.map((launch, index) => <Launch key={index} launch={launch}/>)
            }
        </div>
    );
};

export default Launches;
