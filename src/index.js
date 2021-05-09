import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//State
import { StateProvider } from "./Components/State/StateProvider";
import { reducer, initialState } from "./Components/State/Reducer";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
