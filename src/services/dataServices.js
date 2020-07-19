import axios from 'axios';
import { base_url } from './baseUrl';
axios.defaults.withCredentials = true;

export const getRecords = (params) => {
    return axios.get(`${base_url}/records/`, {params});
}

// User id is not required because backend extracts it from Token
export const getUserFormats = () => {
    return axios.get(`${base_url}/formats`);
}

// export const logoutPost = () => {
//     return axios.post(`${base_url}/users/logout`);
// }