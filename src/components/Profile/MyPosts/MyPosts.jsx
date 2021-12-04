import React from "react";
import Post from "./Post";

const MyPosts = () => {
    
    return (
        <div className="my-posts">
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className="posts">
                <Post message="Quisque id mi. Praesent vestibulum dapibus nibh. Nulla sit amet est. Praesent nec nisl a purus blandit viverra. Nulla sit amet est."/>
                <Post message="Fusce vulputate eleifend sapien. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Curabitur ullamcorper ultricies nisi. Pellentesque auctor neque nec urna. Nam eget dui."/>
                <Post message="Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium. Nulla porta dolor. Vivamus euismod mauris. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor."/>
                <Post message="Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Maecenas nec odio et ante tincidunt tempus. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi."/>
                <Post message="In turpis. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem."/>
                <Post message="Fusce vulputate eleifend sapien. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Curabitur ullamcorper ultricies nisi. Pellentesque auctor neque nec urna. Nam eget dui."/>
                <Post message="Fusce vulputate eleifend sapien. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Curabitur ullamcorper ultricies nisi. Pellentesque auctor neque nec urna. Nam eget dui."/>
                <Post message="Fusce vulputate eleifend sapien. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Curabitur ullamcorper ultricies nisi. Pellentesque auctor neque nec urna. Nam eget dui."/>
                <Post message="Fusce vulputate eleifend sapien. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Curabitur ullamcorper ultricies nisi. Pellentesque auctor neque nec urna. Nam eget dui."/>
                <Post message="Fusce vulputate eleifend sapien. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Curabitur ullamcorper ultricies nisi. Pellentesque auctor neque nec urna. Nam eget dui."/>
                <Post message="Fusce vulputate eleifend sapien. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Curabitur ullamcorper ultricies nisi. Pellentesque auctor neque nec urna. Nam eget dui."/>
                <Post message="Fusce vulputate eleifend sapien. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Curabitur ullamcorper ultricies nisi. Pellentesque auctor neque nec urna. Nam eget dui."/>
            </div>
        </div>
    );
}

export default MyPosts;