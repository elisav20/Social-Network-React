import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessage, updateNewMessageText } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
});

export default withAuthRedirect(
    connect(mapStateToProps, {
        sendMessage,
        updateNewMessageText,
    })(Dialogs)
);
