import {urls} from "../configs";

const createComment = (data) => {
    return fetch(urls.comments, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-type': 'application/json; charset=UTF-8'},
    })
        .then(res => res.json())
}

export const commentService = {
    createComment
}
