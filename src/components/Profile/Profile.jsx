import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Content = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postsData={props.state.postsData}
                addPost={props.addPost}
                newPostText={props.state.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

export default Content;
