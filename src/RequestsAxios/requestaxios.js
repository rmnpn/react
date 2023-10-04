import axios from "axios";
import {baseURL} from "./urls";

const apiService = axios.create({baseURL:baseURL})

export {apiService}