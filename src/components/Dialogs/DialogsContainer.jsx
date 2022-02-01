import { connect } from "react-redux";
import { sendMessage, updateNewMessageText } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth,
});

const DialogsContainer = connect(mapStateToProps, {
    sendMessage,
    updateNewMessageText,
})(Dialogs);

export default DialogsContainer;
