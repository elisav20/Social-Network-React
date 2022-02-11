import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, requiredField } from "../../../utils/validators/validators";
import { renderField } from "../../common/FormsControls/FormsControls";

const maxLength20 = maxLength(20);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="newPostText"
                    placeholder="Text"
                    component={renderField("textarea")}
                    validate={[requiredField, maxLength20]}
                />
            </div>
            <button>Add post</button>
        </form>
    );
};

export default reduxForm({
    form: "ProfileAddPostForm",
})(AddPostForm);
