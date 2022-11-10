import axios from "axios";
import {apiUrl} from '../constants';

/**
 * Đỗ Văn Thức
 * Phương thức get
 * @param {string} url 
 * @returns dữ liệu trả về
 */
export const getDataApi = async (url, params) =>{
    const res = await axios(`${apiUrl}${url}`, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'same-origin',
        params
      })
    //const res = await axios.get(`${apiUrl}${url}`, param);
    return res;
}

/**
 * Đỗ Văn THức
 * Phương thức post
 * @param {string} url 
 * @param {object} data 
 * @returns 
 */

export const postDataApi = async (url, data) =>{
    const res = await axios.post(`${apiUrl}${url}`, data);
    return res;
}

/**
 * Đỗ Văn Thức
 * Phương thức put
 * @param {string} url 
 * @param {object} data 
 * @returns 
 */
export const putDataApi = async (url, data) =>{
    const res = await axios.put(`${apiUrl}${url}`, data);
    return res;
}

/**
 * Đỗ Văn Thức 
 * method: delete
 * @param {stỉng} url 
 * @param {object} data 
 * @returns 
 */
export const deleteDataApi = async (url, data) =>{
    const res = await axios.delete(`${apiUrl}${url}`, data);
    return res;
}


export const patchDataApi = async (url, data) => {
    const res = await axios.patch(`${apiUrl}${url}`, data);
    return res;
}