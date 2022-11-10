import { getDataApi } from "./fetchAPI";
//import { convertObjectToParam } from "../untils";

/**
 * lấy tất cả
 * @returns dữ liệu trả về
 */
export const getPaging = async (model, params) => {
  
    const res = await getDataApi(`${model}`, params);
    return res;
};

/**
 * lấy dữ liệu dựa trên id
 * @param {string} model
 * @param {string} id
 * @returns
 */
export const getById = async (model, id, params) => {

    const res = await getDataApi(`${model}/${id}`, params);
    return res;

};
