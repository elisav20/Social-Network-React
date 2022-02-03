import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
    profile: null,
    postsData: [
        {
            id: 1,
            message:
                "Quisque id mi. Praesent vestibulum dapibus nibh. Nulla sit amet est. Praesent nec nisl a purus blandit viverra. Nulla sit amet est.",
            likesCount: 10,
        },
        {
            id: 2,
            message:
                "Fusce vulputate eleifend sapien. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Curabitur ullamcorper ultricies nisi.",
            likesCount: 11,
        },
        {
            id: 3,
            message:
                "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium. Nulla porta dolor. Vivamus euismod mauris. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor.",
            likesCount: 0,
        },
    ],
    newPostText: "",
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case ADD_POST: {
            return {
                ...state,
                newPostText: "",
                postsData: [
                    ...state.postsData,
                    {
                        id: 5,
                        message: state.newPostText,
                        likesCount: 0,
                    },
                ],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        default:
            return state;
    }
};

// Action creators
export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});
const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});
const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status,
});

// Thunk creators
export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then((response) => {
            dispatch(setUserProfile(response.data));
        });
    };
};
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then((response) => {
            dispatch(setUserStatus(response.data));
        });
    };
};
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
    };
};

export default profileReducer;
