import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Header = (props) => {
    return (
        <header className="header">
            <img src={logo} alt="logo" />
            <div className="login-block">
                {props.isAuth ? (
                    <div>
                        {props.login}{" "}
                        <button onClick={props.logout}>Logout</button>
                    </div>
                ) : (
                    <NavLink to={"/login"}>Login</NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;
