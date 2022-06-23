import React from 'react';

import './Comment.style.css';

const Comment = ({comment, getDetails}) => {
    const {id, name} = comment;

    return (
        <div className={'comment__name'}>
            <div>{id} - {name}</div>
            <button onClick={ () => {
                getDetails(comment);
            }}>Details</button>
        </div>
    );
};

export default Comment;
