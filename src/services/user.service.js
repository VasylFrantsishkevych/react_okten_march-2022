import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const userService = {
    getAllUsers: () => axiosService.get(urls.users).then(value => value.data),
    getUserPosts: (id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data)
}
