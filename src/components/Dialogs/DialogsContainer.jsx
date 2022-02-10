import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessage } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
});

export default compose(
    connect(mapStateToProps, {
        sendMessage,
    }),
    withAuthRedirect
)(Dialogs);
