import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogsData = props.state.dialogsData.map((dialog) => (
        <DialogItem id={dialog.id} name={dialog.name} />
    ));

    const messagesData = props.state.messagesData.map((message) => (
        <Message message={message.message} />
    ));

    const onSendMessageClick = () => {
        props.sendMessage();
    };

    const onMessageChange = (e) => {
        props.updateNewMessageText(e.target.value);
    };

    return (
        <div className="dialogs">
            <h2 className="dialogs__title">DIALOGS</h2>
            <div className="dialogs__items">{dialogsData}</div>
            <div className="messages">
                <div>{messagesData}</div>
                <div>
                    <textarea
                        onChange={onMessageChange}
                        value={props.state.newMessageText}
                        placeholder="Enter your message"
                    />
                    <button onClick={onSendMessageClick}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
