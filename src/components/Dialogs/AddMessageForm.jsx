import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, requiredField } from "../../utils/validators/validators";
import { renderField } from "../common/FormsControls/FormsControls";

const maxLength20 = maxLength(20);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder="Enter your message"
                name="newMessageBody"
                component={renderField("textarea")}
                validate={[requiredField, maxLength20]}
            />
            <button>Send message</button>
        </form>
    );
};

export default reduxForm({
    form: "addMessageForm",
})(AddMessageForm);
