import logo from "./assets/logo.png"
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo img fluid" alt="logo" />
        </header>
      </div>   
      </header>
     <main>
      <Dictionary />
     </main>
      <footer className="App-footer">
        <small>Coded by Stephanie White</small>
        </footer>
    </div>
    </div>
  );
}

export default App;
