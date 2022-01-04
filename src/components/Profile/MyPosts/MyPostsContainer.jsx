import React from "react";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import StoreContext from "../../../storeContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                const state = store.getState().profilePage;
                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                const onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                };

                return (
                    <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.postsData}
                        newPostText={state.newPostText}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
