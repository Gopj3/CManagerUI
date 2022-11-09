import {del, get, post, put} from "../../helpers/api_helper";

const _baseUrl = "/Account";

export function loginUserServerAsyncOperation(data) {
    return post(`${_baseUrl}/login`, data);
};

export function registerUserServerAsyncOperation(data) {
    return post(`${_baseUrl}/register`, data);
};
