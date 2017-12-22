import { combineReducers } from "redux";

const rootReducer = combineReducers({ account:accountReducer });

const accountReducer = (state = [], action) => {
    switch(action.type) {
        case "NETWORK_REQUEST":
            return Object.assign({}, state, {
                isFetching: action.isFetching
            })
        case "USER_SESSION_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                uname: action.uname,
                message: action.message,
            })
        case "LOGIN_USER_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                error: action.error,
                message: action.message,
                uname: action.uname,
                recap: 0,
            })
        case "REGISTER_USER_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                error: action.error,
                message: action.message,
                recap: 0,
            })
        case "CONFIRM_ACCOUNT_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                verifyMessage: action.message
            })
        case "LOGOUT_USER_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                uname: '',
                message: "Logged out"
            })
        case "SITEVERIFY_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                message: action.message,
                error: action.error,
                recap: action.recap,
            })
        case "LOGIN_USER_FAILURE":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                error: action.error,
                message: action.message,
            })
        case "REGISTER_USER_FAILURE":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                error: action.error,
                message: action.message,
            })
        case "CONFIRM_ACCOUNT_FAILURE":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                verifyMessage: action.message,
                pageTitle: action.title
            })
        case "SITEVERIFY_FAILURE":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                message: action.message,
                error: action.error,
                recap: action.recap,
            })
        default:
            return state
    }
}

export default accountReducer;
