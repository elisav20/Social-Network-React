import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import "./App.scss";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/dialogs/*" element={<Dialogs />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
