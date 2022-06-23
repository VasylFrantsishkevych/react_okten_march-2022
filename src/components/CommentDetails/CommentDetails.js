import React from 'react';

import './CommentDetails.style.css';

const CommentDetails = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    return (
        <div className={'comment'}>
            <h3>postId: {postId} id: {id}</h3>
            <h4>{name}</h4>
            <h4>email: {email}</h4>
            <p>{body}</p>
        </div>
    );
};

export default CommentDetails;
