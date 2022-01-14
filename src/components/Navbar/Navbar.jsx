import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__item">
                <NavLink className="nav__link" to="/profile">
                    Profile
                </NavLink>
            </div>
            <div className="nav__item">
                <NavLink className="nav__link" to="/users">
                    Users
                </NavLink>
            </div>
            <div className="nav__item">
                <NavLink className="nav__link" to="/dialogs">
                    Messages
                </NavLink>
            </div>
            <div className="nav__item">
                <NavLink className="nav__link" to="/news">
                    News
                </NavLink>
            </div>
            <div className="nav__item">
                <NavLink className="nav__link" to="/music">
                    Music
                </NavLink>
            </div>
            <div className="nav__item">
                <NavLink className="nav__link" to="/settings">
                    Settings
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
