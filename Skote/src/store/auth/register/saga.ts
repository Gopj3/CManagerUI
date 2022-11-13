import { takeEvery, put, call } from "redux-saga/effects";
import { REGISTER_USER } from "./actionTypes";
import { registerUserSuccessful, registerUserFailed } from "./actions";
import { registerUserServerAsyncOperation } from "../../../services/auth/auth.service";
import { IActionsDataHistoryPayload } from "../../../common/models/actions.payload.model";
import { RegisterModel } from "../../../pages/Authentication/models";
import { UserModel } from "../../../common/models/user.model";

function* registerUser({
  payload: { values, history },
}: IActionsDataHistoryPayload<RegisterModel>) {
  try {
    const response: UserModel = yield call(
      registerUserServerAsyncOperation,
      values
    );
    yield put(registerUserSuccessful(response));
    history!.push("/auth/login");
  } catch (error: any) {
    const { data } = error.response;
    if (data.errors?.length > 0) {
      yield put(registerUserFailed(data.errors[0]));
      return;
    }

    yield put(registerUserFailed(data?.message || error.message));
  }
}

function* accountSaga() {
  yield takeEvery(REGISTER_USER, registerUser);
}

export default accountSaga;
