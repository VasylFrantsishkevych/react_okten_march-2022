import {urls} from "../constants";

export class PostService {
    getAll() {
        return fetch(urls.posts).then(res => res.json());
    }

    getOneById(id) {
        return fetch(urls.posts + '/' + id).then(res => res.json());
    }
}
