import React from "react";
import noUserAvatar from "../../../assets/images/no_user.png";
import Prelaoder from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Prelaoder />;
    }

    return (
        <div className="profile">
            <img
                className="profile__header-img"
                src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                alt="img"
            />
            <div className="profile__info">
                <img
                    className="user__img"
                    src={
                        props.profile.photos.large != null
                            ? props.profile.photos.large
                            : noUserAvatar
                    }
                    alt={props.profile.fullName}
                />
                <p className="profile__name">{props.profile.fullName}</p>
                <p className="profile__about-me">{props.profile.aboutMe}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;
