import {call, put, takeEvery, takeLatest} from "redux-saga/effects";

// Login Redux States
import {LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN} from "./actionTypes";
import {apiError, loginSuccess, logoutUserSuccess} from "./actions";

//Include Both Helper File with needed methods
import {getFirebaseBackend} from "../../../helpers/firebase_helper";
import {
    postSocialLogin,
} from "../../../helpers/backend_helper";
import {loginUserServerAsyncOperation} from "../../../services/auth/auth.service";

function* loginUser({payload: {user, history}}) {
    try {
        const response = yield call(loginUserServerAsyncOperation, {
            email: user.email,
            password: user.password,
        });

        localStorage.setItem("token", response.token);
        yield put(loginSuccess(response.token));
        history.push("/dashboard");
    } catch (error) {
        const data = error.response.data;
        yield put(apiError(data?.errorMessage || error.message));
    }
}

function* logoutUser({payload: {history}}) {
    try {
        localStorage.removeItem("authUser");
        localStorage.removeItem("token");
        history.push("/login");
    } catch (error) {
        yield put(apiError(error));
    }
}

function* socialLogin({payload: {data, history, type}}) {
    try {
        if (import.meta.env.VITE_APP_DEFAULTAUTH === "firebase") {
            const fireBaseBackend = getFirebaseBackend();
            const response = yield call(
                fireBaseBackend.socialLoginUser,
                data,
                type,
            );
            localStorage.setItem("authUser", JSON.stringify(response));
            yield put(loginSuccess(response));
        } else {
            const response = yield call(postSocialLogin, data);
            localStorage.setItem("authUser", JSON.stringify(response));
            yield put(loginSuccess(response));
        }
        history.push("/dashboard");
    } catch (error) {
        yield put(apiError(error));
    }
}

function* authSaga() {
    yield takeEvery(LOGIN_USER, loginUser);
    yield takeLatest(SOCIAL_LOGIN, socialLogin);
    yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
