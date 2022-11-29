import React from "react";
import ReactDOM from "react-dom/client";

import "virtual:windi.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/main.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

