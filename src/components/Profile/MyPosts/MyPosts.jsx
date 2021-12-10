import React from "react";
import Post from "./Post";

const MyPosts = () => {
    let postsData = [
        {
            id: 1,
            message:
                "Quisque id mi. Praesent vestibulum dapibus nibh. Nulla sit amet est. Praesent nec nisl a purus blandit viverra. Nulla sit amet est.",
            likesCount: 10,
        },
        {
            id: 2,
            message:
                "Fusce vulputate eleifend sapien. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Curabitur ullamcorper ultricies nisi.",
            likesCount: 11,
        },
        {
            id: 3,
            message:
                "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium. Nulla porta dolor. Vivamus euismod mauris. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor.",
            likesCount: 0,
        },
    ];

    postsData = postsData.map((post) => (
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
