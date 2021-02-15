import React from 'react';
import PokemonCard from './PokemonCard.jsx';

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex-container">
        {this.props.pokemons.map(pokemon => {
          return <PokemonCard 
            key={pokemon.id}
            pokemon={pokemon} />
        })}
      </div>
    )
  }
}

export default Pokedex;
