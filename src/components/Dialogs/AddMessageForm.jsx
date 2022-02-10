import React from "react";
import { Field, reduxForm } from "redux-form";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder="Enter your message"
                name="newMessageBody"
                component="textarea"
            />
            <button>Send message</button>
        </form>
    );
};

export default reduxForm({
    form: "addMessageForm",
})(AddMessageForm);
