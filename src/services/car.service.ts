import {AxiosRes, axiosService} from "./axios.service";

import {ICar} from "../interfaces";
import {urls} from "../constants";

export const carService = {
    getAll: (): AxiosRes<ICar[]> => axiosService.get(urls.cars),
    getById: (id: number): AxiosRes<ICar> => axiosService.get(`${urls.cars}/${id}`),
    createCar: (car: ICar): AxiosRes<ICar> => axiosService.post(urls.cars, car),
    updateCar: (id: number, car: ICar): AxiosRes<ICar> => axiosService.put(`${urls.cars}/${id}`, car),
    deleteCar: (id: number): AxiosRes<ICar> => axiosService.delete(`${urls.cars}/${id}`)
}
