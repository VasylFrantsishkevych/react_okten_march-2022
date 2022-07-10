import React from 'react';

import './CommentStyle.css';
import {Link} from "react-router-dom";

const Comment = ({comment: {postId, id, name, email, body}}) => {
    return (
        <div className={'comment'}>
            <h3>{id} - {name}</h3>
            <h4>{email}</h4>
            <p>{body}</p>
            <Link to={postId.toString()}>Post</Link>
        </div>
    );
};

export {Comment};
