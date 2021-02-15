import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex.jsx';
import Header from './Header.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
