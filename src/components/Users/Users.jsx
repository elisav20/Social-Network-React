import React from "react";
import { NavLink } from "react-router-dom";
import noUserAvatar from "../../assets/images/no_user.png";
import * as axios from "axios";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
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
                            <NavLink to={`/profile/${user.id}`}>
                                <img
                                    className="user__img"
                                    src={
                                        user.photos.small != null
                                            ? user.photos.small
                                            : noUserAvatar
                                    }
                                    alt={user.name}
                                />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed ? (
                                <button
                                    className="user__btn-follow"
                                    disabled={props.followingInProgress.some(
                                        (id) => id === user.id
                                    )}
                                    onClick={() => {
                                        props.toggleFollowingProgress(
                                            true,
                                            user.id
                                        );
                                        axios
                                            .delete(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY":
                                                            "3c7c7e3b-795d-4983-977b-cd3c7549fe60",
                                                    },
                                                }
                                            )
                                            .then((response) => {
                                                if (
                                                    response.data.resultCode ===
                                                    0
                                                ) {
                                                    props.unfollow(user.id);
                                                }
                                                props.toggleFollowingProgress(
                                                    false,
                                                    user.id
                                                );
                                            });
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    className="user__btn-follow"
                                    disabled={props.followingInProgress.some(
                                        (id) => id === user.id
                                    )}
                                    onClick={() => {
                                        props.toggleFollowingProgress(
                                            true,
                                            user.id
                                        );
                                        axios
                                            .post(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                {},
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY":
                                                            "3c7c7e3b-795d-4983-977b-cd3c7549fe60",
                                                    },
                                                }
                                            )
                                            .then((response) => {
                                                if (
                                                    response.data.resultCode ===
                                                    0
                                                ) {
                                                    props.follow(user.id);
                                                }
                                                props.toggleFollowingProgress(
                                                    false,
                                                    user.id
                                                );
                                            });
                                    }}
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
