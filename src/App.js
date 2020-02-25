import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
    </div>
  );
}

export default App;
