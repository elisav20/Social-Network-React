import { connect } from "react-redux";
import {
    sendMessageCreator,
    updateNewMessageTextCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch) => ({
    sendMessage: () => {
        dispatch(sendMessageCreator());
    },
    updateNewMessageText: (text) => {
        dispatch(updateNewMessageTextCreator(text));
    },
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
