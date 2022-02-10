import React from "react";
import AddPostForm from "./AddPostForm";
import Post from "./Post";

const MyPosts = (props) => {
    const postsData = props.posts.map((post) => (
        <Post
            message={post.message}
            likesCount={post.likesCount}
            key={post.id}
        />
    ));

    const addNewPost = (formData) => {
        props.addPost(formData.newPostText);
    };

    return (
        <div className="my-posts">
            <h3>My posts</h3>
            <AddPostForm onSubmit={addNewPost} />
            <div className="posts">{postsData}</div>
        </div>
    );
};

export default MyPosts;
