export interface IToken {
    token: string;
}

export const actions = {
    SET_TOKEN: "SET_TOKEN",
};

const initialState = {
    token: null,
}

export const setToken = (token: IToken) => {
    return {
        type: actions.SET_TOKEN,
        payload: token,
    };
}

export const authUserReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actions.SET_TOKEN:
            return {
                ...state,
                token: action.payload.token,
            };
        default:
            return state;
    }
}

