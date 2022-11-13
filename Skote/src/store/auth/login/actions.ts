import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
} from "./actionTypes";
import { LoginModel } from "../../../pages/Authentication/models";
import { IHistoryFn } from "../../../common/models/actions.payload.model";

export const loginUser = (values: LoginModel, history: Function) => {
  return {
    type: LOGIN_USER,
    payload: { values, history },
  };
};

export const loginSuccess = (token: string) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const logoutUser = (history: IHistoryFn) => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  };
};

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  };
};

export const apiError = (error: string) => {
  return {
    type: API_ERROR,
    payload: error,
  };
};
