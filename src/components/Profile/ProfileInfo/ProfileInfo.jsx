import React from "react";
import noUserAvatar from "../../../assets/images/no_user.png";
import Loader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <Loader />;
    }

    console.log(profile);

    return (
        <div className="profile">
            <div className="profile__info">
                <img
                    className="user__img"
                    src={
                        profile.photos.large != null
                            ? profile.photos.large
                            : noUserAvatar
                    }
                    alt={profile.fullName}
                />
                <p className="profile__name">{profile.fullName}</p>
                <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
        </div>
    );
};

export default ProfileInfo;
