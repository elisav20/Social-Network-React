import React from "react";
import Post from "./Post";

const MyPosts = (props) => {
    const postsData = props.posts.map((post) => (
        <Post message={post.message} likesCount={post.likesCount} />
    ));

    const onAddPost = () => {
        props.addPost();
    };

    const onPostChange = (e) => {
        props.updateNewPostText(e.target.value);
    };

    return (
        <div className="my-posts">
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className="posts">{postsData}</div>
        </div>
    );
};

export default MyPosts;
