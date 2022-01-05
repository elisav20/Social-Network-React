import { connect } from "react-redux";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => ({
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
    updateNewPostText: (text) => {
        dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
        dispatch(addPostActionCreator());
    },
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
