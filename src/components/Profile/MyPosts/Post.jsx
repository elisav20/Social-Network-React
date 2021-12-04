import React from "react";
import userAvatar from "../../../images/user_avatar.png";
import like from "../../../images/like.svg";

const Post = (props) => {
    return (
        <div className="posts__item">
            <img
                className="posts__user-avatar"
                src={userAvatar}
                alt="user avatar"
            />
            {props.message}
            <div className="posts__actions">
                <img className="posts__like" src={like} alt="like" />
            </div>
        </div>
    );
};

export default Post;
