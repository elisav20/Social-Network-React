import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { logout } from "../../redux/authReducer";
import Header from "./Header";

class ProfileContainer extends React.Component {
    render() {
        return <Header {...this.props} />;
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default compose(
    connect(mapStateToProps, {
        logout,
    })
)(ProfileContainer);
