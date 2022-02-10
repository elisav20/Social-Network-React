import React from "react";
import AddMessageForm from "./AddMessageForm";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogsData = props.dialogsPage.dialogsData.map((dialog) => (
        <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />
    ));

    const messagesData = props.dialogsPage.messagesData.map((message) => (
        <Message message={message.message} key={message.id} />
    ));

    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <div className="dialogs">
            <h2 className="dialogs__title">DIALOGS</h2>
            <div className="dialogs__items">{dialogsData}</div>
            <div className="messages">
                <div>{messagesData}</div>
                <AddMessageForm onSubmit={onSubmit} />
            </div>
        </div>
    );
};

export default Dialogs;
