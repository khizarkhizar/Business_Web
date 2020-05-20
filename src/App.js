import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
// simport "./App.css";
import Navbar from "./Components//Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <div>Heloooooooooooooooooooooo</div>
    </BrowserRouter>
  );
}

export default App;
