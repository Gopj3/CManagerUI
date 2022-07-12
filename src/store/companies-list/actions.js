import {
    GET_USER_COMPANIES_LIST, GET_USER_COMPANIES_LIST_SUCCESS
} from "./actionTypes";

export const getUserCompaniesList = () => ({
    type: GET_USER_COMPANIES_LIST,
})

export const getUserCompaniesListSuccess = companies => ({
    type: GET_USER_COMPANIES_LIST_SUCCESS,
    payload: companies,
})
