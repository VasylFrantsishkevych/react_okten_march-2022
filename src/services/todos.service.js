import {urls} from "../configs";

export const todosService = {
    getAll: () => fetch(urls.todos).then(res => res.json())
}
