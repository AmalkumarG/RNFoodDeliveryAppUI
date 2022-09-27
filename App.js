import React from "react";
import Navigators from "./src/navigators";
import { Provider } from "react-redux";
import store from "./src/store";

export default () => (
  <Provider store={store}>
    <Navigators />
  </Provider>
);
