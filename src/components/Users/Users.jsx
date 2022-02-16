import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
    totalUsersCount,
    pageSize,
    users,
    followingInProgress,
    unfollow,
    follow,
    currentPage,
    onPageChanged,
    followed,
}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return (
        <div>
            {users.map((user) => (
                <User
                    user={user}
                    followingInProgress={followingInProgress}
                    unfollow={unfollow}
                    follow={follow}
                />
            ))}

            <Paginator
                totalCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
        </div>
    );
};

export default Users;
