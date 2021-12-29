import React from "react";
import {
    sendMessageCreator,
    updateNewMessageTextCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const state = props.store.getState().dialogsPage;

    const sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    };

    const updateNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextCreator(text));
    };

    return (
        <Dialogs
            updateNewMessageText={updateNewMessageText}
            sendMessage={sendMessage}
            state={state}
        />
    );
};

export default DialogsContainer;
