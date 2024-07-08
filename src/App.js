import React from "react";
import logo from "./assets/logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>Coded by Stephanie White</small>
      </footer>
    </div>
  );
}

export default App;
