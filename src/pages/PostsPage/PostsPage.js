import React, {Component} from 'react';

import './PostsPageStyle.css';
import {PostService} from "../../services";
import {Post} from "../../components";

class PostsPage extends Component {

    state = {posts: []};

    constructor(props) {
        super(props);
        this.postService = new PostService();
        this.postService.getAll().then(value => this.setState({posts: value}));
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        );
    }
}

export {PostsPage};
