import React from 'react';

const UserPosts = ({item}) => {
    return (
        <div>
            <p>{item.id} - {item.body}</p>
        </div>
    );
};

export {UserPosts};
