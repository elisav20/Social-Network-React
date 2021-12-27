import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Content = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postsData={props.state.postsData}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Content;
