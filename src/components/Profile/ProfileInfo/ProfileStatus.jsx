import React, { useState, useEffect } from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    const onStatusChange = (e) => setStatus(e.currentTarget.value);

    return (
        <div>
            {!editMode && (
                <p
                    className="profile__about-me"
                    onDoubleClick={activateEditMode}
                >
                    {status || "-------"}
                </p>
            )}
            {editMode && (
                <div>
                    <input
                        autoFocus={true}
                        value={status}
                        onBlur={deactivateEditMode}
                        onChange={onStatusChange}
                    />
                </div>
            )}
        </div>
    );
};

export default ProfileStatus;
