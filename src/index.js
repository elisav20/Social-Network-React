import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import MainApp from "./App";

import "./index.scss";

ReactDOM.render(
    <React.StrictMode>
        <MainApp />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
