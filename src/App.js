import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import { SaveReload } from "./components/SaveReload";
import { Counter } from "./components/Counter";
import { Slides } from "./components/Slides";
import MyForm from "./components/MyForm";
import Testing from "./components/Testing";
import Request from "./components/Request";
import ValidationForm from "./components/ValidationForm";

function App() {
  // const [count, updateCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Request />
      </header>
      <ValidationForm />
    </div>
  );
}

export default App;
