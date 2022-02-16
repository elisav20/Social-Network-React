import { createSelector } from "reselect";

export const getUsers = (state) => state.usersPage.users;
export const getUsersSuperSelector = createSelector(getUsers, (users) =>
    users.filter((user) => true)
);
export const getPageSize = (state) => state.usersPage.pageSize;
export const getTotalUserCount = (state) => state.usersPage.totalUsersCount;
export const getCurrentPage = (state) => state.usersPage.currentPage;
export const getIsFetching = (state) => state.usersPage.isFetching;
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};
