import { render } from "react-dom";
import React from "react";
import App from "./components/App";
import Form from "./components/Form";
import Table from "./components/Table";

const containerEl = document.getElementById("container");
const formContainer = document.getElementById("formContainer");
const tableDiv = document.getElementById("tableDiv");

render(<App/>,containerEl);
render(<Form/>,formContainer);
render(<Table/>,tableDiv);
