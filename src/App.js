import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Routes, Route } from "react-router-dom";
import LoginContainer from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
import Loader from "./components/common/Preloader/Preloader";

import "./App.scss";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Loader />;
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/profile" element={<ProfileContainer />}>
                            <Route
                                path=":userId"
                                element={<ProfileContainer />}
                            />
                        </Route>
                        <Route
                            path="/dialogs/*"
                            element={<DialogsContainer />}
                        />
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/login" element={<LoginContainer />} />
                    </Routes>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default compose(connect(mapStateToProps, { initializeApp }))(App);
