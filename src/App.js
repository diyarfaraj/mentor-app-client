import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";

import "./App.css";
import MianNavbar from "./component/navbar/mainNavbar";
import HomePage from "./component/home/homePage";

function App() {
  return (
    <div className="App">
      <MianNavbar />
    </div>
  );
}

export default App;
