import React, {useEffect, useState} from 'react';

import {urls} from "../../configs";
import {Post, PostDetails} from "../index";
import './Posts.style.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(urls.posts)
            .then(res => res.json())
            .then(value => setPosts(value));
    }, [])

    const getDetails = (post) => {
        setPost(post);
    }

    return (
        <div>
            <h2>Posts</h2>
            <div className={'container'}>
                <div className={'posts'}>
                    {
                        posts.map(post => <Post key={post.id} post={post} getDetails={getDetails}/>)
                    }
                </div>
                <div className={'post__details'}>
                    {
                        post && <PostDetails post={post}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Posts;
