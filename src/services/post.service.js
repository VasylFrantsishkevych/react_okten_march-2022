import {axiosService} from "./axios.service";
import {urls} from "../configs";


export const postService = {
    getPostById: (postId) => axiosService(`${urls.posts}/${postId}`).then(value => value.data)
}
