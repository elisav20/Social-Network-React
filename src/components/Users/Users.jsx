import React from "react";
import noUserAvatar from "../../assets/images/no_user.png";

const Users = (props) => {
    const pagesCount = Math.ceil(
        props.totalUsersCount / props.pageSize
    );
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return (
        <div>
            {props.users.map((user) => (
                <div className="user__item" key={user.id}>
                    <div>
                        <div>
                            <img
                                className="user__img"
                                src={
                                    user.photos.small != null
                                        ? user.photos.small
                                        : noUserAvatar
                                }
                                alt={user.name}
                            />
                        </div>
                        <div>
                            {user.followed ? (
                                <button
                                    className="user__btn-follow"
                                    onClick={() => props.unfollow(user.id)}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    className="user__btn-follow"
                                    onClick={() => props.follow(user.id)}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="user__info">
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="pagination">
                {pages.map((page) => {
                    return (
                        <button
                            className={
                                page === props.currentPage
                                    ? "pagination__item active"
                                    : "pagination__item"
                            }
                            onClick={() => {
                                props.onPageChanged(page);
                            }}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Users;
