import { render } from "react-dom";
import React from "react";
import App from "./components/App";
import Form from "./components/Form";

const containerEl = document.getElementById("container");
const formContainer = document.getElementById("formContainer");

render(<App/>,containerEl);
render(<Form/>,formContainer);
