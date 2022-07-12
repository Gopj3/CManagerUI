import { takeEvery, put, call } from "redux-saga/effects";
import {
    GET_USER_COMPANIES_LIST,
    GET_USER_COMPANIES_LIST_SUCCESS
} from "./actionTypes";
import {getUserCompaniesList} from "../../helpers/backend_helper";
import {getUserCompaniesListSuccess} from "./actions";

function* onGetCompaniesList() {
    try {
        const response = yield call(getUserCompaniesList);
        yield put(getUserCompaniesListSuccess(response));
    } catch (error) {
        console.log(error);
    }
}

function* companiesListSaga() {
    yield takeEvery(GET_USER_COMPANIES_LIST, onGetCompaniesList);
}

export default companiesListSaga;
