import React from 'react';

import './User.style.css';

const User = ({user, getDetails}) => {
    const {id, name} = user;

    return (
        <div className={'user'}>
            <div>{id} - {name}</div>
            <button onClick={() => {
                getDetails(user)
            }}>Details</button>
        </div>
    );
};

export default User;
