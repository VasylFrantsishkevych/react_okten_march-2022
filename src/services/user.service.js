import {urls} from "../configs";

export const userService = {
    createUser: (data) => fetch(urls.users, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-type': 'application/json; charset=UTF-8'},
    })
        .then(res => res.json())
}
