import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "@elastic/eui/dist/eui_theme_dark.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;
