import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {commentService} from "../../services";
import {Comment} from "../../components";
import './CommentPageStyle.css';

const CommentsPage = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(value => setComments([...value]))
    }, [])

    return (
        <>
            <div>
                <Outlet/>
            </div>
            <div className={'comments'}>
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </div>
        </>

    );
};

export {CommentsPage};
