import React from "react";

const Users = (props) => {
    if (props.users.lengt === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl:
                    "https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg",
                fullName: "Dmitry",
                status: "I am a boss",
                location: {
                    city: "Minsk",
                    country: "Belarus",
                },
                followed: true,
            },
            {
                id: 2,
                fullName: "Sasha",
                photoUrl:
                    "https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg",
                status: "I am a boss too",
                location: {
                    city: "Russia",
                    country: "Moscow",
                },
                followed: false,
            },
            {
                id: 3,
                fullName: "Andrew",
                photoUrl:
                    "https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg",
                status: "I am a boss too",
                location: {
                    city: "Ukraine",
                    country: "Kiev",
                },
                followed: true,
            },
        ]);
    }

    return (
        <div>
            {props.users.map((user) => (
                <div className="user__item" key={user.id}>
                    <div>
                        <div>
                            <img
                                className="user__img"
                                src={user.photoUrl}
                                alt={user.fullName}
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
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </div>
                        <div>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Users;
