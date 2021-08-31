import React, { Component } from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Home
        style={{ minHeight: "100vh", border: "1px solid rgba(0,0,0,0.05)" }}
      />
    </div>
  );
}

export default App;
