import React, {useEffect, useState} from 'react';

import {urls} from "../../configs";
import {User, UserDetails} from "../index";
import './Users.style.css';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect( () => {
        fetch(urls.users)
            .then(res => res.json())
            .then(value => setUsers(value))
    }, [])

    const getDetails = (user) => {
        setUser(user);
    }
    return (
        <div>
            <h2>Users</h2>
            <div className={'container'}>
                <div className={'users'}>
                    {
                        users.map(user => <User key={user.id} user={user} getDetails={getDetails}/>)
                    }
                </div>
                <div className={'user__details'}>
                    {
                        user && <UserDetails user={user}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Users;
