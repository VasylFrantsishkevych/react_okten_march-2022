import React, {Component} from 'react';
import {CommentService} from "../../services";
import {Comment} from "../../components";

class CommentsPage extends Component {

    state = {comments: []}

    constructor(props) {
        super(props);
        this.commentService = new CommentService();
        this.commentService.getAll().then(value => this.setState({comments: value}))
    }




    render() {
        return (
            <div>
                {
                    this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </div>
        );
    }
}

export {CommentsPage};
