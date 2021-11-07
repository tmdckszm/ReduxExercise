import React from "react";
import "./App.css";
import Subscribers from "./component/Subscribers";
import { Provider } from "react-redux";
import store from "../src/component/rudux/store";
import Display from "./component/Display";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Subscribers />
        <Display />
      </div>
    </Provider>
  );
};

export default App;
