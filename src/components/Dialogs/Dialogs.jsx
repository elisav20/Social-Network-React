import React from "react";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
    return (
        <div className="dialogs">
            <h2 className="dialogs__title">DIALOGS</h2>
            <div className="dialogs__items">
                <div className="dialogs__item active">
                    <NavLink to="/dialogs/1">Vasea</NavLink>
                </div>
                <div className="dialogs__item">
                    <NavLink to="/dialogs/2">Andrei</NavLink>
                </div>
                <div className="dialogs__item">
                    <NavLink to="/dialogs/3">Ghorghe</NavLink>
                </div>
                <div className="dialogs__item">
                    <NavLink to="/dialogs/4">Victor</NavLink>
                </div>
                <div className="dialogs__item">
                    <NavLink to="/dialogs/5">Valera</NavLink>
                </div>
                <div className="dialogs__item">
                    <NavLink to="/dialogs/6">Sveta</NavLink>
                </div>
                <div className="dialogs__item">
                    <NavLink to="/dialogs/7">Sasha</NavLink>
                </div>
            </div>

            <div className="messages">
                <div className="messages__item">Hy</div>
                <div className="messages__item">How are you?</div>
                <div className="messages__item">Yo</div>
            </div>
        </div>
    );
};

export default Dialogs;