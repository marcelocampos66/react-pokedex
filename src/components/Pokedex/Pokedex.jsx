import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard.jsx';
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return(
      <div className="pokedex">
          {
          pokemons.map(pokemon => {
            return <PokemonCard 
              key={pokemon.id}
              pokemon={pokemon} />
          })
          }
        </div>
    );
  }
}

export default Pokedex;
