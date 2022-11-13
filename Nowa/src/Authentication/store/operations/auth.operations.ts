import {api} from "../../../services/api/api.service";
import {ILoginModel} from "../../models";
import {Dispatch} from "react";

export const loginAsyncOperation = (model: ILoginModel) => async (dispatch: Dispatch<any>, getState: Function) => {
    try {
    const response = await api.post("auth/login", model);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}
