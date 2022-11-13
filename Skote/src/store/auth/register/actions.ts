import {
  REGISTER_USER,
  REGISTER_USER_SUCCESSFUL,
  REGISTER_USER_FAILED,
} from "./actionTypes";
import { RegisterModel } from "../../../pages/Authentication/models";
import { IHistoryFn } from "../../../common/models/actions.payload.model";

export const registerUser = (values: RegisterModel, history: IHistoryFn) => {
  return {
    type: REGISTER_USER,
    payload: { values, history },
  };
};

export const registerUserSuccessful = (user) => {
  return {
    type: REGISTER_USER_SUCCESSFUL,
    payload: user,
  };
};

export const registerUserFailed = (user) => {
  return {
    type: REGISTER_USER_FAILED,
    payload: user,
  };
};
