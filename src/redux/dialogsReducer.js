const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
    dialogsData: [
        { id: 1, name: "Vasea" },
        { id: 2, name: "Gheorghe" },
        { id: 3, name: "Andrei" },
        { id: 4, name: "Oleg" },
        { id: 5, name: "Sasha" },
        { id: 6, name: "Sveta" },
        { id: 7, name: "Abdulah" },
    ],
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
    ],
    newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageText: action.newText,
            };
        case SEND_MESSAGE:
            return {
                ...state,
                newMessageText: "",
                messagesData: [
                    ...state.messagesData,
                    {
                        id: 5,
                        message: state.newMessageText,
                        likesCount: 0,
                    },
                ],
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newText: text,
});

export default dialogsReducer;
