import React from 'react';

const User = ({item, getUserPosts}) => {
    const {id, name} = item;
    return (
        <div>
            <h2>{id} - {name}</h2>
            <button onClick={() => {getUserPosts(id)}}>All posts this user</button>
        </div>
    );
};

export {User};
