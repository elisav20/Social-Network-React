import React from "react";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__item">
                <a className="nav__link" href="#">
                    Profile
                </a>
            </div>
            <div className="nav__item">
                <a className="nav__link" href="#">
                    Messages
                </a>
            </div>
            <div className="nav__item">
                <a className="nav__link" href="#">
                    News
                </a>
            </div>
            <div className="nav__item">
                <a className="nav__link" href="#">
                    Music
                </a>
            </div>
            <div className="nav__item">
                <a className="nav__link" href="#">
                    Settings
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
