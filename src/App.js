import React, { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
import Loader from "./components/common/Preloader/Preloader";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/reduxStore";
import "./App.scss";

const DialogsContainer = React.lazy(() =>
    import("./components/Dialogs/DialogsContainer")
);

const ProfileContainer = React.lazy(() =>
    import("./components/Profile/ProfileContainer")
);

const UsersContainer = React.lazy(() =>
    import("./components/Users/UsersContainer")
);

const LoginContainer = React.lazy(() =>
    import("./components/Login/LoginContainer")
);

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
                <Suspense fallback={<Loader />}>
                    <div className="content">
                        <Routes>
                            <Route
                                path="/profile"
                                element={<ProfileContainer />}
                            >
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
                </Suspense>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

const AppContainer = compose(connect(mapStateToProps, { initializeApp }))(App);
const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    );
};

export default MainApp;
