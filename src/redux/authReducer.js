import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: action.payload.isAuth,
            };
        default:
            return state;
    }
};

// Action creators
const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        email,
        login,
        isAuth,
    },
});

// Thunk creators
export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then((response) => {
        if (response.data.resultCode === 0) {
            const { id, email, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
};
export const login =
    (email, password, rememberMe = false) =>
    (dispatch) => {
        authAPI.login(email, password, rememberMe).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = response.data.messages
                    ? response.data.messages[0]
                    : "Some error";
                dispatch(stopSubmit("login", { _error: message }));
            }
        });
    };

export const logout = () => (dispatch) => {
    authAPI.logout().then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
};

export default authReducer;
