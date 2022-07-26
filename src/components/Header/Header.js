import React from 'react';
import {Link} from "react-router-dom";

import './HeaderStyle.css';

const Header = () => {
    return (
        <div className={'header'}>
            <Link to={'/cars'}>Cars</Link>
            <Link to={'/users'}>Users</Link>
        </div>
    );
};

export {Header};
