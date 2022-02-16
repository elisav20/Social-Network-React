import { profileAPI } from "../api/api";

const ADD_POST = "samurai-network/profile/ADD-POST";
const DELETE_POST = "samurai-network/profile/DELETE_POST";
const SET_USER_PROFILE = "samurai-network/profile/SET_USER_PROFILE";
const SET_USER_STATUS = "samurai-network/profile/SET_USER_STATUS";

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
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postsData: [
                    ...state.postsData,
                    {
                        id: 5,
                        message: action.newPostText,
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
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(
                    (post) => post.id !== action.id
                ),
            };
        }
        default:
            return state;
    }
};

// Action creators
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (id) => ({ type: DELETE_POST, id });

const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});
const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status,
});

// Thunk creators
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};

export default profileReducer;
