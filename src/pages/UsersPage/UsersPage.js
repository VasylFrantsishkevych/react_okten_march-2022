import React, {Component} from 'react';
import {UserService} from "../../services";
import {User} from "../../components";
import {Outlet} from "react-router-dom";

class UsersPage extends Component {

    state = {users: []};

    constructor(props) {
        super(props);
        this.userService = new UserService()
        this.userService.getAll().then(value => this.setState({users: value}))
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <div>{
                    this.state.users.map(user => <User key={user.id} user={user}/>)
                }</div>
                <div>
                    <Outlet/>
                </div>
            </div>
        );
    }
}

export {UsersPage};
