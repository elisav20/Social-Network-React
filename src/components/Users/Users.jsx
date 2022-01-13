import * as axios from "axios";
import React from "react";
import noUserAvatar from "../../assets/images/no_user.png";

const Users = (props) => {
    if (props.users.length === 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                props.setUsers(response.data.items);
            });
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
                                    user.photos.small !== null
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
        </div>
    );
};

export default Users;
