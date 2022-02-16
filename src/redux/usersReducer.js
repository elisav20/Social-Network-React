import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objectHelpers";

const FOLLOW = "samurai-network/users/FOLLOW";
const UNFOLLOW = "samurai-network/users/UNFOLLOW";
const SET_USERS = "samurai-network/users/SET_USERS";
const SET_CURRENT_PAGE = "samurai-network/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "samurai-network/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "samurai-network/users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS =
    "samurai-network/users/TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {
                    followed: true,
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {
                    followed: false,
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [
                          state.followingInProgress.filter(
                              (id) => id !== action.userId
                          ),
                      ],
            };
        default:
            return state;
    }
};

// Action creators
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});
export const setTotalUsersCount = (count) => ({
    type: SET_TOTAL_USERS_COUNT,
    count,
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
});

// Thunk creators
export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const data = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (
    dispatch,
    userId,
    apiMethod,
    actionCreator
) => {
    dispatch(toggleFollowingProgress(true, userId));

    const response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }

    dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => async (dispatch) =>
    followUnfollowFlow(
        dispatch,
        userId,
        usersAPI.follow.bind(usersAPI),
        followSuccess
    );

export const unfollow = (userId) => async (dispatch) =>
    followUnfollowFlow(
        dispatch,
        userId,
        usersAPI.unfollow.bind(usersAPI),
        unfollowSuccess
    );

export default usersReducer;
