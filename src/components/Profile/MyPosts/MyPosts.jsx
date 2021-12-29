import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import Post from "./Post";

const MyPosts = (props) => {
    const postsData = props.state.postsData.map((post) => (
        <Post message={post.message} likesCount={post.likesCount} />
    ));

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const onPostChange = (e) => {
        props.dispatch(
            updateNewPostTextActionCreator(e.target.value)
        );
    };

    return (
        <div className="my-posts">
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.state.newPostText}
                    />
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className="posts">{postsData}</div>
        </div>
    );
};

export default MyPosts;
