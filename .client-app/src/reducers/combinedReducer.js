import * as types from "../actions/actionTypes";

export const initialState = {
    username: "",
    password: "",
    jokes: [],
    logintransaction: false,
    joketransaction: false,
    token: ""
};

export const combinedReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER:
            return {...state, token: action.payload };
        case types.LOGIN:
            return {
                ...state,
                error: "",
                token: "",
                logintransaction: false
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                logintransaction: true,
                error: "",
                token: [...action.payload]
            };

        case types.LOGIN_FAILED:
            return {
                ...state,

                logintransaction: false,

                error: action.payload
            };
        case types.GET_JOKES:
            return {
                ...state,
                joketransaction: false,
                jokes: [],
                error: ""
            };
        case types.GET_JOKES_SUCCESS:
            return {
                ...state,

                joketransaction: true,

                error: "",

                jokes: [...state.jokes, ...action.payload]
            };

        case types.GET_JOKES_FAILED:
            return {
                ...state,

                joketransaction: false,

                error: action.payload
            };
        case types.LOGOUT:
            return {
                ...state,
                token: ""
            };
        default:
            return state;
    }
};

export default [combinedReducer, initialState];