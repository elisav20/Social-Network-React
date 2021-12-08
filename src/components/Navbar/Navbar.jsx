import React from "react";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__item">
                <a className="nav__link" href="/profile">
                    Profile
                </a>
            </div>
            <div className="nav__item">
                <a className="nav__link" href="/dialogs">
                    Messages
                </a>
            </div>
            <div className="nav__item">
                <a className="nav__link" href="/news">
                    News
                </a>
            </div>
            <div className="nav__item">
                <a className="nav__link" href="/music">
                    Music
                </a>
            </div>
            <div className="nav__item">
                <a className="nav__link" href="/settings">
                    Settings
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
