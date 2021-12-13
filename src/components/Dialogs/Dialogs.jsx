import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogsData = [
        { id: 1, name: "Vasea" },
        { id: 2, name: "Gheorghe" },
        { id: 3, name: "Andrei" },
        { id: 4, name: "Oleg" },
        { id: 5, name: "Sasha" },
        { id: 6, name: "Sveta" },
        { id: 7, name: "Abdulah" },
    ];

    dialogsData = dialogsData.map((dialog) => (
        <DialogItem id={dialog.id} name={dialog.name} />
    ));

    let messagesData = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
    ];

    messagesData = messagesData.map((message) => (
        <Message message={message.message} />
    ));

    return (
        <div className="dialogs">
            <h2 className="dialogs__title">DIALOGS</h2>
            <div className="dialogs__items">{dialogsData}</div>

            <div className="messages">{messagesData}</div>
        </div>
    );
};

export default Dialogs;
