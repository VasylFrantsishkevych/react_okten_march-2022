import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const commentService = {
    getAll: () => axiosService(urls.comments).then(value => value.data)
}
