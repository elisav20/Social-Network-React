import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessage, updateNewMessageText } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
});

export default compose(
    connect(mapStateToProps, {
        sendMessage,
        updateNewMessageText,
    }),
    withAuthRedirect
)(Dialogs);
