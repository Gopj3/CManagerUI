import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

const baseURL: string = process.env.REACT_APP_API_URL!;
export const api: AxiosInstance = axios.create({
  baseURL: baseURL,
});

api.interceptors.request.use(function (config: AxiosRequestConfig) {
  const token = localStorage.getItem("token");
  config.headers!.Authorization = `Bearer ${token}`;

  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => Promise.reject(error)
);


//
// export async function get<T extends  object>(url: string, config = {}): T {
//   return await axiosApi
//     .get(url, { ...config })
//     .then((response) => response.data);
// }
//
// export async function post<T>(url: string, data: object, config = {}) {
//   return axiosApi
//     .post(url, { ...data }, { ...config })
//     .then((response) => response.data);
// }
//
// export async function put(url: string, data: object, config = {}) {
//   return axiosApi
//     .put(url, { ...data }, { ...config })
//     .then((response) => response.data);
// }
//
// export async function del(url: string, config = {}) {
//   return await axiosApi
//     .delete(url, { ...config })
//     .then((response) => response.data);
// }
