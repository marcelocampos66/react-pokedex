import React from 'react';
import Pokedex from '../Pokedex/Pokedex';
import Button from '../Button/Button';
import './PokedexContainer.css';

class PokedexContainer extends React.Component {
  constructor(props) {
    super(props);
    const { pokemons } = this.props;
    this.state = {
      inputTextValue: '',
      filteredType: 'all',
      pokemons: pokemons,
    }
    this.handleChangeSearchBar = this.handleChangeSearchBar.bind(this)
    this.handleClickSearchBar = this.handleClickSearchBar.bind(this)
    this.handleResetSearchBar = this.handleResetSearchBar.bind(this)
    this.filterByType = this.filterByType.bind(this)
  }

  filterByType({ target }) {
    const { value } = target;
    const { pokemons } = this.props;
    if (value === 'all') {
      this.setState({
        pokemons: pokemons,
      });
    } else {
      const result = pokemons
        .filter(pokemon => pokemon.type.includes(value));
      this.setState({
        pokemons: result,
      });
    }
  }

  handleChangeSearchBar({ target }) {
    const { value } = target;
    this.setState({ inputTextValue: value });
  }

  handleClickSearchBar() {
    const { inputTextValue } = this.state;
    const { pokemons } = this.props;
    
    this.setState({
      pokemons: pokemons.filter(pokemon => pokemon.name.includes(inputTextValue)),
      inputTextValue: '',
    });
    
  }

  handleResetSearchBar() {
    const { pokemons } = this.props;
    this.setState({
      pokemons: pokemons,
    });
  }

  render() {
    const pokemonTypes = ['all', 'bug', 'dark', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water', 'dragon'];

    const { inputTextValue, pokemons } = this.state;

    return(
      <main className='pokedex-container'>
        <div className="search-text-input">
          <span>Search Pokemon: </span>
          <input
            type='text'
            value={ inputTextValue }
            onChange={ this.handleChangeSearchBar }
          />
          <Button
            handleClick={ this.handleClickSearchBar }
          >Search</Button>
          <Button
            handleClick={ this.handleResetSearchBar }
          >Reset</Button>
        </div>
        <div className='buttons-type-container'>
          {
            pokemonTypes.map(type => {
              return (
                <Button
                  handleClick={ this.filterByType }
                  className={ type }
                  value={ type }
                  children= { type }
                  key={ type }
                />
              );
            })
          }
        </div>
        <Pokedex pokemons={ pokemons } />
      </main>
    );
  }
}

export default PokedexContainer;
