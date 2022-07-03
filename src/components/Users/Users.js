import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "../User/User";

const Users = ({getUserPosts}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAllUsers().then(value => setUsers([...value]))
    },[])

    return (
        <div>
            {
                users.map(user => <User key={user.id} item={user} getUserPosts={getUserPosts}/>)
            }
        </div>
    );
};

export {Users};
