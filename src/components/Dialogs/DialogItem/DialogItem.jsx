import React from "react";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className="dialogs__item">
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;
