import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import "./App.scss";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route
                            path="/profile"
                            element={<Profile />}
                        />
                        <Route
                            path="/dialogs/*"
                            element={<DialogsContainer />}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
