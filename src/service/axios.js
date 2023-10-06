import axios from "axios";
import {baseURL} from "./urls";

const apiService = axios.create({baseURL: baseURL});

const carService = {
    getAll: () => apiService.get(baseURL),
    create: (car) => apiService.post(baseURL, car),
    updateById: (id, car) => apiService.put(`baseURL/${id}`, car),
    deleteById: (id) => apiService.delete(`baseURL/${id}`)
}

export {carService};