import axios from "axios";
import {baseURL} from "../constants";

// eslint-disable-next-line no-undef
const apiService = axios.create({baseURL});

export  {
    apiService
}