import React from 'react';
import PropTypes from 'prop-types';

class PokemonCard extends React.Component {
  render() {
    const { id, name, type, weight, sprites } = this.props.pokemon;
    const { normal, animated } = sprites;
    return (
      <div className="pokemon-card">
        <p> { id } </p>
        <div>
          <p>{ name.toUpperCase() }</p>
          <p>Type: { type }</p>
          <p>Peso: { weight } Kg</p>
        </div>
        <img src={ animated } alt={ name } />
      </div>
    )
  }
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
}

export default PokemonCard;
