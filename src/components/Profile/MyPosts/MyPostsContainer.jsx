import { connect } from "react-redux";
import { compose } from "redux";
import { addPost, updateNewPostText } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => ({
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
});

export default compose(
    connect(mapStateToProps, {
        updateNewPostText,
        addPost,
    })
)(MyPosts);
