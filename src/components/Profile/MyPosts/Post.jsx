import React from "react";
import userAvatar from "../../../assets/images/user_avatar.png";
import like from "../../../assets/images/like.svg";

const Post = (props) => {
    return (
        <div className="posts__item">
            <img
                className="posts__user-avatar"
                src={userAvatar}
                alt="user avatar"
            />
            <p className="posts__message">{props.message}</p>
            <div className="posts__actions">
                <img className="posts__like" src={like} alt="like" /> <span>{props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;
