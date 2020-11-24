import React from 'react';
import './App.scss';
import logo from './assets/logo_meli.png';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={logo} alt=""/>

          <div className="search-inputs">
            <input type="text" placeholder="Buscar productos, marcas y más..."/>
            <button>Buscar</button>
          </div>

        </nav>

      </header>
    </div>
  );
}

export default App;
