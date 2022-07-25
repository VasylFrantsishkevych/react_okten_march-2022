import {axiosService} from "./axiosService";
import {urls} from "../constants";

export class CommentService {
    getAll() {
        return axiosService(urls.comments).then(res => res.data)
    }
}
