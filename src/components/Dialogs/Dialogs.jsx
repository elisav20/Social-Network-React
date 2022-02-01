import React from "react";
import { Navigate } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogsData = props.dialogsPage.dialogsData.map((dialog) => (
        <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />
    ));

    const messagesData = props.dialogsPage.messagesData.map((message) => (
        <Message message={message.message} key={message.id} />
    ));

    const onSendMessageClick = () => {
        props.sendMessage();
    };

    const onMessageChange = (e) => {
        props.updateNewMessageText(e.target.value);
    };

    if (!props.isAuth) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="dialogs">
            <h2 className="dialogs__title">DIALOGS</h2>
            <div className="dialogs__items">{dialogsData}</div>
            <div className="messages">
                <div>{messagesData}</div>
                <div>
                    <textarea
                        onChange={onMessageChange}
                        value={props.newMessageText}
                        placeholder="Enter your message"
                    />
                    <button onClick={onSendMessageClick}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
