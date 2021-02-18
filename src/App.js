import React from 'react';
import './App.css';
import pokemons from './data/data';
import PokedexV2 from './components/Pokedex_v2';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <PokedexV2 pokemons={pokemons}/>
    </div>
  );
}

export default App;
