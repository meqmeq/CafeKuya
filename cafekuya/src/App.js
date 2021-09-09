import React, { Component } from "react";
import Home from "./components/Home";
import Menu from "./components/Menu"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Home/>
      {/* <Menu/> */}
      <Contact/>
    </div>
  );
}

export default App;
