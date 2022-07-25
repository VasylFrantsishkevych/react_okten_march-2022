import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.user = this.props.user
    }

    render() {
        return (
            <div>
                {this.props.user.id} - {this.props.user.name}
            </div>
        );
    }
}

export {User};
