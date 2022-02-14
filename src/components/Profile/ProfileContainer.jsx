import React from "react";
import { connect } from "react-redux";
import {
    getUserProfile,
    getStatus,
    updateStatus,
} from "../../redux/profileReducer";
import { useMatch } from "react-router-dom";
import Profile from "./Profile";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match
            ? this.props.match.params.userId
            : this.props.authorizedUserId;

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId,
});

const ProfileURLMatch = (props) => {
    const match = useMatch("/profile/:userId/");
    return <ProfileContainer {...props} match={match} />;
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
    })
)(ProfileURLMatch);
