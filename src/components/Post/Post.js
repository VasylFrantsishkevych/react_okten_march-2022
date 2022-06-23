import React from 'react';

import './Post.style.css';

const Post = ({post, getDetails}) => {

    const {id, title} = post;

    return (
        <div className={'post'}>
            <div>{id} - {title}</div>
            <button onClick={ () => {
                getDetails(post)
            }}>Details</button>
        </div>
    );
};

export default Post;
