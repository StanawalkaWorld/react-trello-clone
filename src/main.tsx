import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "virtual:windi.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/main.css";

import App from "./App";
import store from "./stores/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

