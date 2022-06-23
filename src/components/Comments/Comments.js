import React, {useEffect, useState} from 'react';

import './Comments.style.css';
import {urls} from "../../configs";
import {Comment, CommentDetails} from "../index";

const Comments = () => {

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState(null);

    useEffect(() => {
        fetch(urls.comments)
            .then(res => res.json())
            .then(value => setComments(value));
    },[]);

    const getDetails = (comment) => {
        setComment(comment)
    }

    return (
        <div>
            <h2>Comments</h2>
            <div className={'container'}>
                <div className={'comments'}>
                    {
                        comments.map(comment => <Comment key={comment.id} comment={comment} getDetails={getDetails}/>)
                    }
                </div>
                <div className={'comments__details'}>
                    {
                        comment && <CommentDetails comment={comment}/>
                    }
                </div>

            </div>
        </div>
    );
};

export default Comments;
