import React, { useState } from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./assets/logo.png"; // Import the logo image

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <div className="pokedex-background">
        <header className="App-header">
          <h1>
            <img src={logo} alt="Logo" /> {/* Use the imported logo variable */}
          </h1>
          
        </header>
        <main className="container">
          <Dictionary keyword={searchTerm} />
        </main>
        <footer className="App-footer">
          <small>
            Coded by <a href="https://github.com/Stephaniechatter">Stephanie White</a> and is open sourced on <a href="https://github.com/Stephaniechatter/pokemon-dictionary-project">GitHub</a> and hosted on <a href="https://pokedexdictionary.netlify.app/">Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
