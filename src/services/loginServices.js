 
import axios from 'axios';
import { base_url } from './baseUrl';
axios.defaults.withCredentials = true;

export const loginPost = (credentials) => {
    return axios.post(`${base_url}/users/login`, credentials);
}

export const logoutPost = () => {
    return axios.post(`${base_url}/users/logout`);
}
