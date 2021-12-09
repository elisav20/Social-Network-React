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
    const dialogsData = [
        { id: 1, name: "Vasea" },
        { id: 2, name: "Gheorghe" },
        { id: 3, name: "Andrei" },
        { id: 4, name: "Oleg" },
        { id: 5, name: "Sasha" },
        { id: 6, name: "Sveta" },
        { id: 7, name: "Abdulah" },
    ];

    const messagesData = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
    ];

    return (
        <div className="dialogs">
            <h2 className="dialogs__title">DIALOGS</h2>
            <div className="dialogs__items">
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
                <DialogItem id={dialogsData[5].id} name={dialogsData[5].name} />
                <DialogItem id={dialogsData[6].id} name={dialogsData[6].name} />
            </div>

            <div className="messages">
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    );
};

export default Dialogs;
