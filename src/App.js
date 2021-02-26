import React from 'react';
import './App.css';
import pokemons from './data/data';
// import Pokedex from './components/Pokedex/Pokedex';
import Header from './components/Header/Header';
import PokedexContainer from './components/PokedexContainer/PokedexContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <PokedexContainer pokemons={pokemons}/>
    </div>
  );
}

export default App;
