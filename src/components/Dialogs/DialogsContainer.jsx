import React from "react";
import {
    sendMessageCreator,
    updateNewMessageTextCreator,
} from "../../redux/dialogsReducer";
import StoreContext from "../../storeContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().dialogsPage;

                const sendMessage = () => {
                    store.dispatch(sendMessageCreator());
                };

                const updateNewMessageText = (text) => {
                    store.dispatch(updateNewMessageTextCreator(text));
                };
                return (
                    <Dialogs
                        updateNewMessageText={updateNewMessageText}
                        sendMessage={sendMessage}
                        state={state}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
