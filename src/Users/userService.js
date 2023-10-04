import {apiService} from "../RequestsAxios/requestaxios";
import {baseURL} from "../RequestsAxios/urls";

const userService = {
    getAll:()=>apiService.get(baseURL),
    create:()=>apiService.post(baseURL)
}

export {userService}