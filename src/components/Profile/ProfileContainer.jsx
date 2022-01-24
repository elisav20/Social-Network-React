import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { useMatch } from "react-router-dom";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : 2;

        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/` + userId
            )
            .then((response) => {
                // debugger;
                this.props.setUserProfile(response.data);
            });
    }
    render() {
        // debugger;
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

export default connect(mapStateToProps, {
    setUserProfile,
})(ProfileURLMatch);
