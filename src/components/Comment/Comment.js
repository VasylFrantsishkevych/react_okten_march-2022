import React, {Component} from 'react';

class Comment extends Component {
    render() {
        return (
            <div>
                {this.props.comment.id} - {this.props.comment.name}
            </div>
        );
    }
}

export {Comment};
