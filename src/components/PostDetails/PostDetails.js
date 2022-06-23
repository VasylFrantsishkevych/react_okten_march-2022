import React from 'react';

import './PostDetails.style.css';

const PostDetails = ({post}) => {

    const {userId, id, title, body} = post;

    return (
        <div className={'postDetails'}>
            <h3>userId: {userId} id: {id}</h3>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;
