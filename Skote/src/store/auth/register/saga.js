import { takeEvery, put, call } from "redux-saga/effects"
import { REGISTER_USER } from "./actionTypes"
import { registerUserSuccessful, registerUserFailed } from "./actions"
import {registerUserServerAsyncOperation} from "../../../services/auth/auth.service";

function* registerUser({ payload: { user, history } }) {
  try {
    const response = yield call(registerUserServerAsyncOperation, user)
    yield put(registerUserSuccessful(response))
    history.push('/auth/login');
  } catch (error) {
    const {data} = error.response;
    if (data.errors?.length > 0) {
      yield put(registerUserFailed(data.errors[0]))
      return;
    }

    yield put(registerUserFailed(error?.message))
  }
}

function* accountSaga() {
  yield takeEvery(REGISTER_USER, registerUser)
}

export default accountSaga
