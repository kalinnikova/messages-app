import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {setupStore} from "./store/store";
import {Provider} from "react-redux";

const store = setupStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
