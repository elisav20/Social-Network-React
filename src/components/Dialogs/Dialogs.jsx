import React from "react";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className="dialogs__item">
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className="messages__item">{props.message}</div>;
};

const Dialogs = () => {
    return (
        <div className="dialogs">
            <h2 className="dialogs__title">DIALOGS</h2>
            <div className="dialogs__items">
                <DialogItem id="1" name="Vasea" />
                <DialogItem id="2" name="Gheorghe" />
                <DialogItem id="3" name="Andrei" />
                <DialogItem id="4" name="Oleg" />
                <DialogItem id="5" name="Sasha" />
                <DialogItem id="1" name="Sveta" />
                <DialogItem id="1" name="Abdulah" />
            </div>

            <div className="messages">
                <Message message="Hy" />
                <Message message="How are you?" />
                <Message message="Yo" />
            </div>
        </div>
    );
};

export default Dialogs;
