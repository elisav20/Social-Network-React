import React from "react";
import { Field, reduxForm } from "redux-form";

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" placeholder="Text" component="textarea" />
            </div>
            <button>Add post</button>
        </form>
    );
};

export default reduxForm({
    form: "ProfileAddPostForm",
})(AddPostForm);
