import {axiosService} from "./axiosService";
import {urls} from "../constants";

export class UserService {
    getAll() {
        return axiosService(urls.users).then(res => res.data)
    }

    getById(id) {
        return axiosService(`${urls.users}/${id}`).then(res => res.data)
    }
}
