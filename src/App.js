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
        <small>Coded by <a href="https://github.com/Stephaniechatter"target="_blank">Stephanie White</a> and is open sourced on <a href="https://github.com/Stephaniechatter/pokemon-dictionary-project"target="_blank">GitHub</a> and hosted on <a href="https://pokedexdictionary.netlify.app/"target="_blank">Netflify</a></small>
      </footer>
    </div>
  );
}

export default App;
