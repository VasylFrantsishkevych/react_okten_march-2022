import React from 'react';
import {Link} from "react-router-dom";

import './HeaderStyle.css';

const Header = () => {
    return (
        <div className={'header'}>
            <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/comments'}>Comments</Link>
        </div>
    );
};

export {Header};
