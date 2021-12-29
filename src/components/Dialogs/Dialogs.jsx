import React from "react";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/dialogsReducer";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const state = props.store.getState().dialogsPage;
    const dialogsData = state.dialogsData.map((dialog) => (
        <DialogItem id={dialog.id} name={dialog.name} />
    ));

    const messagesData = state.messagesData.map((message) => (
        <Message message={message.message} />
    ));

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    const onMessageChange = (e) => {
        props.store.dispatch(updateNewMessageTextCreator(e.target.value));
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
                        value={state.newMessageText}
                        placeholder="Enter your message"
                    />
                    <button onClick={onSendMessageClick}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
