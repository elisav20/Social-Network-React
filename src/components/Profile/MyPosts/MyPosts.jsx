import React from "react";
import Post from "./Post";

const MyPosts = (props) => {
    const postsData = props.postsData.map((post) => (
        <Post message={post.message} likesCount={post.likesCount} />
    ));

    return (
        <div className="my-posts">
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className="posts">{postsData}</div>
        </div>
    );
};

export default MyPosts;
