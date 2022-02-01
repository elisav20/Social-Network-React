import React from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { Navigate, useMatch } from "react-router-dom";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : 2;

        this.props.getUserProfile(userId);
    }
    render() {
        if (!this.props.isAuth) {
            return <Navigate to="/login" />;
        }

        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
});

const ProfileURLMatch = (props) => {
    const match = useMatch("/profile/:userId/");
    return <ProfileContainer {...props} match={match} />;
};

export default connect(mapStateToProps, {
    getUserProfile,
})(ProfileURLMatch);
