import React, {useEffect, useState} from 'react';
import {postService} from "../../services";
import {useParams} from "react-router-dom";
import {Post} from "../../components";

const PostPage = () => {

    const {postId} = useParams();
    const [post, setPost] = useState({});
    console.log(post)

    useEffect( () => {
        postService.getPostById(postId).then(value => setPost({...value}))
    }, [postId])
    return (
        <div>
            {
                post && <Post post={post}/>
            }
        </div>
    );
};

export {PostPage};
