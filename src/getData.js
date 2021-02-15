let Pokedex = require('pokedex'),
pokedex = new Pokedex();
 
// console.log( pokedex.pokemon(1) );

const pokemons = [];

for (let index = 252; index < 387; index += 1) {
  pokemons.push(pokedex.pokemon(index));
}

console.log(pokemons);

// export default pokemons;
