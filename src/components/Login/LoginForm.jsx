import React from "react";
import { reduxForm, Field } from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="content">
                <div className="input-field">
                    <Field
                        type="email"
                        placeholder="Email"
                        name="email"
                        component="input"
                    />
                </div>
                <div className="input-field">
                    <Field
                        type="password"
                        placeholder="Password"
                        component="input"
                        name="password"
                    />
                </div>
                <div className="input-field">
                    <Field
                        type="checkbox"
                        component="input"
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
