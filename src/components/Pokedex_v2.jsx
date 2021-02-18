import React from 'react';
import PokemonCard from './PokemonCard.jsx';

class PokedexV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTextValue: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    // console.log(event.target.value);
    this.setState({ inputTextValue: event.target.value });
  }

  render() {
    const { pokemons } = this.props;
    const { inputTextValue } = this.state;
    return(
      <div className='pokedex-container'>
        <div className="search-text-input">
          <span>Search Pokemon: </span>
          <input type='text' onChange={this.handleChange} />
        </div>
        <div className="pokedex-cards-container">
          {
          pokemons.filter(pokemon => pokemon.name.includes(inputTextValue))
          .map(pokemon => {
            return <PokemonCard 
              key={pokemon.id}
              pokemon={pokemon} />
          })
          }
        </div>
      </div>
    );
  }
}

export default PokedexV2;
