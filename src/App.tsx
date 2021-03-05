import React from "react";
import { Provider } from "react-redux";
import { Component } from "./Component";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
}

export default App;
