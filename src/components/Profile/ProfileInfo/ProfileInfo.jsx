import React from "react";
import noUserAvatar from "../../../assets/images/no_user.png";
import Loader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loader />;
    }

    return (
        <div className="profile">
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
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    );
};

export default ProfileInfo;
