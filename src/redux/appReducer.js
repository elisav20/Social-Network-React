import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = "samurai-network/app/INITIALIZED_SUCCESS";

const initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

// Action creators
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

// Thunk creators
export const initializeApp = () => async (dispatch) => {
    await dispatch(getAuthUserData());

    dispatch(initializedSuccess());
};

export default appReducer;
