import React from 'react';
import {Link} from "react-router-dom";

import './Menu.style.css';

const Menu = () => {
    return (
        <div className={'menu'}>
            <Link to={'/todos'}>Todos</Link>
            <Link to={'/albums'}>Albums</Link>
            <Link to={'/comments'}>Comments</Link>
        </div>
    );
};

export {Menu};
