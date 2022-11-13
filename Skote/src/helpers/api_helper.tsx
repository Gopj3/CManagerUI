import axios, { AxiosResponse } from "axios";

//pass new generated access token here
const token = localStorage.getItem("token");

//apply base url for axios
const API_URL = "http://localhost:8000/";

export const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;

axiosApi.interceptors.response.use(
  (response: any) => response,
  (error: any) => Promise.reject(error)
);

export async function get(url: string, config = {}) {
  return await axiosApi
    .get(url, { ...config })
    .then((response: any) => response.data);
}

export async function post(url: string, data: object, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then((response: any) => response.data);
}

export async function put(url: string, data: any, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response: any) => response.data);
}

export async function del(url: string, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response: any) => response.data);
}
