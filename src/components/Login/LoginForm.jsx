import React from "react";
import { reduxForm, Field } from "redux-form";
import { requiredField, maxLength } from "../../utils/validators/validators";
import { renderField } from "../common/FormsControls/FormsControls";

const maxLength20 = maxLength(20);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="content">
                <div className="input-field">
                    <Field
                        type="email"
                        placeholder="Email"
                        name="email"
                        component={renderField("input")}
                        validate={[requiredField, maxLength20]}
                    />
                </div>
                <div className="input-field">
                    <Field
                        type="password"
                        placeholder="Password"
                        component={renderField("input")}
                        validate={[requiredField, maxLength20]}
                        name="password"
                    />
                </div>
                <div className="input-field remember">
                    <Field
                        type="checkbox"
                        component={renderField("input")}
                        name="rememberMe"
                    />
                    Remember me
                </div>
                <a href="/forgot" className="link">
                    Forgot Your Password?
                </a>
            </div>
            <div className="action">
                <button>Register</button>
                <button>Sign in</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: "login",
})(LoginForm);

export default LoginReduxForm;
