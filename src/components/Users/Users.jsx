import * as axios from "axios";
import React from "react";
import noUserAvatar from "../../assets/images/no_user.png";

class Users extends React.Component {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);

        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        const pagesCount = Math.ceil(
            this.props.totalUsersCount / this.props.pageSize
        );
        const pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            if (pages.length < 10) {
                pages.push(i);
            }
        }

        return (
            <div>
                {this.props.users.map((user) => (
                    <div className="user__item" key={user.id}>
                        <div>
                            <div>
                                <img
                                    className="user__img"
                                    src={
                                        user.photos.small != null
                                            ? user.photos.small
                                            : noUserAvatar
                                    }
                                    alt={user.name}
                                />
                            </div>
                            <div>
                                {user.followed ? (
                                    <button
                                        className="user__btn-follow"
                                        onClick={() =>
                                            this.props.unfollow(user.id)
                                        }
                                    >
                                        Unfollow
                                    </button>
                                ) : (
                                    <button
                                        className="user__btn-follow"
                                        onClick={() =>
                                            this.props.follow(user.id)
                                        }
                                    >
                                        Follow
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="user__info">
                            <div>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </div>
                            <div>
                                <div>{"user.location.country"}</div>
                                <div>{"user.location.city"}</div>
                            </div>
                        </div>
                    </div>
                ))}
                <div class="pagination">
                    {pages.map((page) => {
                        return (
                            <button
                                className={
                                    page === this.props.currentPage
                                        ? "pagination__item active"
                                        : "pagination__item"
                                }
                                onClick={() => {
                                    this.onPageChanged(page);
                                }}
                            >
                                {page}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Users;
