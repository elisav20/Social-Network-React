import React from "react";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        const { email, password, rememberMe } = formData;

        props.login(email, password, rememberMe);
    };

    if (props.isAuth) {
        return <Navigate to="/profile" />;
    }

    return (
        <div className="login-form">
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    );
};

export default Login;
