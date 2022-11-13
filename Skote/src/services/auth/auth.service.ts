import { del, get, post, put } from "../../helpers/api_helper";
import {
  LoginModel,
  LoginResult,
  RegisterModel,
} from "../../pages/Authentication/models";
import { UserModel } from "../../common/models/user.model";

const _baseUrl = "/auth";

export function loginUserServerAsyncOperation(
  data: LoginModel
): Promise<LoginResult> {
  return post(`${_baseUrl}/login`, data);
}

export function registerUserServerAsyncOperation(
  data: RegisterModel
): Promise<UserModel> {
  return post(`${_baseUrl}/register`, data);
}
