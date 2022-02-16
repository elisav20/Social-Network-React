import React from "react";
import { NavLink } from "react-router-dom";
import noUserAvatar from "../../assets/images/no_user.png";

const User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
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
                            disabled={followingInProgress.some(
                                (id) => id === user.id
                            )}
                            onClick={() => {
                                unfollow(user.id);
                            }}
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button
                            className="user__btn-follow"
                            disabled={followingInProgress.some(
                                (id) => id === user.id
                            )}
                            onClick={() => {
                                follow(user.id);
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
    );
};

export default User;
