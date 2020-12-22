import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDO from "./todo";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./module/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <ToDO />
        </div>
      </ReduxProvider>
    );
  }
}

export default App;