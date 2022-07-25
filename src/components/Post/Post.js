import React, {Component} from 'react';

import './PostStyle.css';

class Post extends Component {

    render() {
        return (
            <div>
                {this.props.post.id} - {this.props.post.title}
            </div>
        );
    }
}

export {Post};
