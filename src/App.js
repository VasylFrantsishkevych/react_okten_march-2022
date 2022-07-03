import './App.css';
import {UserPosts, Users} from "./components";
import {useState} from "react";
import {userService} from "./services";

function App() {

    const [userPosts, setUserPosts] = useState([]);

    const getUserPosts = (id) => {
        userService.getUserPosts(id).then(value => setUserPosts(value))
    }
    return (
        <div>
            {
                userPosts.map(value => <UserPosts key={value.id} item={value}/>)
            }
            <hr/>
            <Users getUserPosts={getUserPosts}/>
        </div>
    );
}

export default App;
