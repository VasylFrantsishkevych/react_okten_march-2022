import {urls} from "../configs";

export const albumService = {
    getAll: () => fetch(urls.albums).then(res => res.json())
}
