import React from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { useMatch } from "react-router-dom";
import Profile from "./Profile";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : 2;

        this.props.getUserProfile(userId);
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

const ProfileURLMatch = (props) => {
    const match = useMatch("/profile/:userId/");
    return <ProfileContainer {...props} match={match} />;
};

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
    })
)(ProfileURLMatch);
