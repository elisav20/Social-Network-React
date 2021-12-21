import React from "react";
import Post from "./Post";

const MyPosts = (props) => {
    const postsData = props.postsData.map((post) => (
        <Post message={post.message} likesCount={post.likesCount} />
    ));
    const newPostElement = React.createRef();

    const addPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        props.updateNewPostText(newPostElement.current.value);
    };

    return (
        <div className="my-posts">
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className="posts">{postsData}</div>
        </div>
    );
};

export default MyPosts;
