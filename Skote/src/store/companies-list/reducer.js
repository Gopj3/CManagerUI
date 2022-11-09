import {GET_USER_COMPANIES_LIST_SUCCESS} from "./actionTypes";

const INIT_STATE = {
    companies: [],
}

const UserCompanies = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_USER_COMPANIES_LIST_SUCCESS:
            return {
                ...state,
                companies: action.payload,
            }
        default:
            return state
    }
};

export default UserCompanies;
