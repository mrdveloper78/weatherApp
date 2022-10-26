import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import Layout from "./Components/Layout/Layout";
import { Provider } from "react-redux";
import mainStore from "./Stors/Redux/MainStore";

function App() {
  
  return (
    <div className="app">
      <Provider store={mainStore}>
      <Layout/>
      </Provider>
    </div>
  );
}

export default App;
