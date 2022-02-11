import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getAuthUserData, logout } from "../../redux/authReducer";
import Header from "./Header";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }
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
        getAuthUserData,
        logout,
    })
)(ProfileContainer);
