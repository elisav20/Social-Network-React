import { connect } from "react-redux";
import {
    followAC,
    setUsersAC,
    unfollowAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setIsFetchingAC,
} from "../../redux/usersReducer";
import * as axios from "axios";
import React from "react";
import Users from "./Users";
import Prelaoder from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.setIsFetching(true);

        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setIsFetching(false);
            });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Prelaoder /> : null}
                <Users
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => {
        dispatch(followAC(userId));
    },
    unfollow: (userId) => {
        dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users));
    },
    setCurrentPage: (page) => {
        dispatch(setCurrentPageAC(page));
    },
    setTotalUsersCount: (totalCount) => {
        dispatch(setTotalUsersCountAC(totalCount));
    },
    setIsFetching: (isFetching) => {
        dispatch(setIsFetchingAC(isFetching));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
