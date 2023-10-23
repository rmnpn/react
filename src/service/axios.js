import axios from "axios";
import {baseURL, urls} from "./urls";


const apiService = axios.create({baseURL});

const carService = {
    getAll: () => apiService.get(urls.cars.base),
    create: (car) => apiService.post(urls.cars.base, car),
    updateById: (id, car) => apiService.put(urls.cars.byId(id), car),
    deleteById: (id) => apiService.delete(urls.cars.byId(id))
}

export {carService};