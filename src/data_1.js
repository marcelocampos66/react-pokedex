const pokemons1 = [
  {
    id: '1',
    species_id: '1',
    height: '7',
    weight: '69',
    type: 'grass/poison',
    base_experience: '64',
    order: '1',
    is_default: '1',
    name: 'bulbasaur',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif'
    },
    generation: '1'
  },
  {
    id: '2',
    species_id: '2',
    height: '10',
    weight: '130',
    type: 'grass/poison',
    base_experience: '142',
    order: '2',
    is_default: '1',
    name: 'ivysaur',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/ivysaur.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif'
    },
    generation: '1'
  },
  {
    id: '3',
    species_id: '3',
    height: '20',
    weight: '1000',
    type: 'grass/poison',
    base_experience: '236',
    order: '3',
    is_default: '1',
    name: 'venusaur',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/venusaur.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif'
    },
    generation: '1'
  },
  {
    id: '4',
    species_id: '4',
    height: '6',
    weight: '85',
    type: 'fire',
    base_experience: '62',
    order: '5',
    is_default: '1',
    name: 'charmander',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/charmander.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif'
    },
    generation: '1'
  },
  {
    id: '5',
    species_id: '5',
    height: '11',
    weight: '190',
    type: 'fire',
    base_experience: '142',
    order: '6',
    is_default: '1',
    name: 'charmeleon',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/charmeleon.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif'
    },
    generation: '1'
  },
  {
    id: '6',
    species_id: '6',
    height: '17',
    weight: '905',
    type: 'fire/flying',
    base_experience: '240',
    order: '7',
    is_default: '1',
    name: 'charizard',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/charizard.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif'
    },
    generation: '1'
  },
  {
    id: '7',
    species_id: '7',
    height: '5',
    weight: '90',
    type: 'water',
    base_experience: '63',
    order: '10',
    is_default: '1',
    name: 'squirtle',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/squirtle.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif'
    },
    generation: '1'
  },
  {
    id: '8',
    species_id: '8',
    height: '10',
    weight: '225',
    type: 'water',
    base_experience: '142',
    order: '11',
    is_default: '1',
    name: 'wartortle',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/wartortle.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif'
    },
    generation: '1'
  },
  {
    id: '9',
    species_id: '9',
    height: '16',
    weight: '855',
    type: 'water',
    base_experience: '239',
    order: '12',
    is_default: '1',
    name: 'blastoise',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/blastoise.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif'
    },
    generation: '1'
  },
  {
    id: '10',
    species_id: '10',
    height: '3',
    weight: '29',
    type: 'bug',
    base_experience: '39',
    order: '14',
    is_default: '1',
    name: 'caterpie',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/caterpie.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif'
    },
    generation: '1'
  },
  {
    id: '11',
    species_id: '11',
    height: '7',
    weight: '99',
    type: 'bug',
    base_experience: '72',
    order: '15',
    is_default: '1',
    name: 'metapod',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/metapod.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif'
    },
    generation: '1'
  },
  {
    id: '12',
    species_id: '12',
    height: '11',
    weight: '320',
    type: 'bug/flying',
    base_experience: '178',
    order: '16',
    is_default: '1',
    name: 'butterfree',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/butterfree.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif'
    },
    generation: '1'
  },
  {
    id: '13',
    species_id: '13',
    height: '3',
    weight: '32',
    type: 'bug/poison',
    base_experience: '39',
    order: '17',
    is_default: '1',
    name: 'weedle',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/weedle.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif'
    },
    generation: '1'
  },
  {
    id: '14',
    species_id: '14',
    height: '6',
    weight: '100',
    type: 'bug/poison',
    base_experience: '72',
    order: '18',
    is_default: '1',
    name: 'kakuna',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/kakuna.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif'
    },
    generation: '1'
  },
  {
    id: '15',
    species_id: '15',
    height: '10',
    weight: '295',
    type: 'bug/poison',
    base_experience: '178',
    order: '19',
    is_default: '1',
    name: 'beedrill',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/beedrill.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif'
    },
    generation: '1'
  },
  {
    id: '16',
    species_id: '16',
    height: '3',
    weight: '18',
    type: 'normal/flying',
    base_experience: '50',
    order: '21',
    is_default: '1',
    name: 'pidgey',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/pidgey.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif'
    },
    generation: '1'
  },
  {
    id: '17',
    species_id: '17',
    height: '11',
    weight: '300',
    type: 'normal/flying',
    base_experience: '122',
    order: '22',
    is_default: '1',
    name: 'pidgeotto',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/pidgeotto.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif'
    },
    generation: '1'
  },
  {
    id: '18',
    species_id: '18',
    height: '15',
    weight: '395',
    type: 'normal/flying',
    base_experience: '216',
    order: '23',
    is_default: '1',
    name: 'pidgeot',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/pidgeot.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif'
    },
    generation: '1'
  },
  {
    id: '19',
    species_id: '19',
    height: '3',
    weight: '35',
    type: 'normal',
    base_experience: '51',
    order: '25',
    is_default: '1',
    name: 'rattata',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/rattata.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif'
    },
    generation: '1'
  },
  {
    id: '20',
    species_id: '20',
    height: '7',
    weight: '185',
    type: 'normal',
    base_experience: '145',
    order: '27',
    is_default: '1',
    name: 'raticate',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/raticate.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif'
    },
    generation: '1'
  },
  {
    id: '21',
    species_id: '21',
    height: '3',
    weight: '20',
    type: 'normal/flying',
    base_experience: '52',
    order: '30',
    is_default: '1',
    name: 'spearow',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/spearow.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/spearow.gif'
    },
    generation: '1'
  },
  {
    id: '22',
    species_id: '22',
    height: '12',
    weight: '380',
    type: 'normal/flying',
    base_experience: '155',
    order: '31',
    is_default: '1',
    name: 'fearow',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/fearow.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif'
    },
    generation: '1'
  },
  {
    id: '23',
    species_id: '23',
    height: '20',
    weight: '69',
    type: 'poison',
    base_experience: '58',
    order: '32',
    is_default: '1',
    name: 'ekans',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/ekans.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/ekans.gif'
    },
    generation: '1'
  },
  {
    id: '24',
    species_id: '24',
    height: '35',
    weight: '650',
    type: 'poison',
    base_experience: '157',
    order: '33',
    is_default: '1',
    name: 'arbok',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/arbok.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif'
    },
    generation: '1'
  },
  {
    id: '25',
    species_id: '25',
    height: '4',
    weight: '60',
    type: 'electric',
    base_experience: '112',
    order: '35',
    is_default: '1',
    name: 'pikachu',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/pikachu.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif'
    },
    generation: '1'
  },
  {
    id: '26',
    species_id: '26',
    height: '8',
    weight: '300',
    type: 'electric',
    base_experience: '218',
    order: '43',
    is_default: '1',
    name: 'raichu',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/raichu.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif'
    },
    generation: '1'
  },
  {
    id: '27',
    species_id: '27',
    height: '6',
    weight: '120',
    type: 'ground',
    base_experience: '60',
    order: '45',
    is_default: '1',
    name: 'sandshrew',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/sandshrew.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif'
    },
    generation: '1'
  },
  {
    id: '28',
    species_id: '28',
    height: '10',
    weight: '295',
    type: 'ground',
    base_experience: '158',
    order: '47',
    is_default: '1',
    name: 'sandslash',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/sandslash.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif'
    },
    generation: '1'
  },
  {
    id: '29',
    species_id: '29',
    height: '4',
    weight: '70',
    type: 'poison',
    base_experience: '55',
    order: '49',
    is_default: '1',
    name: 'nidoran-f',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/nidoran-f.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-f.gif'
    },
    generation: '1'
  },
  {
    id: '30',
    species_id: '30',
    height: '8',
    weight: '200',
    type: 'poison',
    base_experience: '128',
    order: '50',
    is_default: '1',
    name: 'nidorina',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/nidorina.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/nidorina.gif'
    },
    generation: '1'
  },
  {
    id: '31',
    species_id: '31',
    height: '13',
    weight: '600',
    type: 'poison/ground',
    base_experience: '227',
    order: '51',
    is_default: '1',
    name: 'nidoqueen',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/nidoqueen.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/nidoqueen.gif'
    },
    generation: '1'
  },
  {
    id: '32',
    species_id: '32',
    height: '5',
    weight: '90',
    type: 'poison',
    base_experience: '55',
    order: '52',
    is_default: '1',
    name: 'nidoran-m',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/nidoran-m.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-m.gif'
    },
    generation: '1'
  },
  {
    id: '33',
    species_id: '33',
    height: '9',
    weight: '195',
    type: 'poison',
    base_experience: '128',
    order: '53',
    is_default: '1',
    name: 'nidorino',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/nidorino.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/nidorino.gif'
    },
    generation: '1'
  },
  {
    id: '34',
    species_id: '34',
    height: '14',
    weight: '620',
    type: 'poison/ground',
    base_experience: '227',
    order: '54',
    is_default: '1',
    name: 'nidoking',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/nidoking.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/nidoking.gif'
    },
    generation: '1'
  },
  {
    id: '35',
    species_id: '35',
    height: '6',
    weight: '75',
    type: 'fairy',
    base_experience: '113',
    order: '56',
    is_default: '1',
    name: 'clefairy',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/clefairy.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/clefairy.gif'
    },
    generation: '1'
  },
  {
    id: '36',
    species_id: '36',
    height: '13',
    weight: '400',
    type: 'fairy',
    base_experience: '217',
    order: '57',
    is_default: '1',
    name: 'clefable',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/clefable.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif'
    },
    generation: '1'
  },
  {
    id: '37',
    species_id: '37',
    height: '6',
    weight: '99',
    type: 'fire',
    base_experience: '60',
    order: '58',
    is_default: '1',
    name: 'vulpix',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/vulpix.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif'
    },
    generation: '1'
  },
  {
    id: '38',
    species_id: '38',
    height: '11',
    weight: '199',
    type: 'fire',
    base_experience: '177',
    order: '60',
    is_default: '1',
    name: 'ninetales',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/ninetales.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif'
    },
    generation: '1'
  },
  {
    id: '39',
    species_id: '39',
    height: '5',
    weight: '55',
    type: 'normal/fairy',
    base_experience: '95',
    order: '63',
    is_default: '1',
    name: 'jigglypuff',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/jigglypuff.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif'
    },
    generation: '1'
  },
  {
    id: '40',
    species_id: '40',
    height: '10',
    weight: '120',
    type: 'normal/fairy',
    base_experience: '196',
    order: '64',
    is_default: '1',
    name: 'wigglytuff',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/wigglytuff.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/wigglytuff.gif'
    },
    generation: '1'
  },
  {
    id: '41',
    species_id: '41',
    height: '8',
    weight: '75',
    type: 'poison/flying',
    base_experience: '49',
    order: '65',
    is_default: '1',
    name: 'zubat',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/zubat.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/zubat.gif'
    },
    generation: '1'
  },
  {
    id: '42',
    species_id: '42',
    height: '16',
    weight: '550',
    type: 'poison/flying',
    base_experience: '159',
    order: '66',
    is_default: '1',
    name: 'golbat',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/golbat.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/golbat.gif'
    },
    generation: '1'
  },
  {
    id: '43',
    species_id: '43',
    height: '5',
    weight: '54',
    type: 'grass/poison',
    base_experience: '64',
    order: '68',
    is_default: '1',
    name: 'oddish',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/oddish.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/oddish.gif'
    },
    generation: '1'
  },
  {
    id: '44',
    species_id: '44',
    height: '8',
    weight: '86',
    type: 'grass/poison',
    base_experience: '138',
    order: '69',
    is_default: '1',
    name: 'gloom',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/gloom.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/gloom.gif'
    },
    generation: '1'
  },
  {
    id: '45',
    species_id: '45',
    height: '12',
    weight: '186',
    type: 'grass/poison',
    base_experience: '221',
    order: '70',
    is_default: '1',
    name: 'vileplume',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/vileplume.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/vileplume.gif'
    },
    generation: '1'
  },
  {
    id: '46',
    species_id: '46',
    height: '3',
    weight: '54',
    type: 'bug/grass',
    base_experience: '57',
    order: '72',
    is_default: '1',
    name: 'paras',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/paras.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/paras.gif'
    },
    generation: '1'
  },
  {
    id: '47',
    species_id: '47',
    height: '10',
    weight: '295',
    type: 'bug/grass',
    base_experience: '142',
    order: '73',
    is_default: '1',
    name: 'parasect',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/parasect.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/parasect.gif'
    },
    generation: '1'
  },
  {
    id: '48',
    species_id: '48',
    height: '10',
    weight: '300',
    type: 'bug/poison',
    base_experience: '61',
    order: '74',
    is_default: '1',
    name: 'venonat',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/venonat.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/venonat.gif'
    },
    generation: '1'
  },
  {
    id: '49',
    species_id: '49',
    height: '15',
    weight: '125',
    type: 'bug/poison',
    base_experience: '158',
    order: '75',
    is_default: '1',
    name: 'venomoth',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/venomoth.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/venomoth.gif'
    },
    generation: '1'
  },
  {
    id: '50',
    species_id: '50',
    height: '2',
    weight: '8',
    type: 'ground',
    base_experience: '53',
    order: '76',
    is_default: '1',
    name: 'diglett',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/diglett.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/diglett.gif'
    },
    generation: '1'
  },
  {
    id: '51',
    species_id: '51',
    height: '7',
    weight: '333',
    type: 'ground',
    base_experience: '149',
    order: '78',
    is_default: '1',
    name: 'dugtrio',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/dugtrio.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/dugtrio.gif'
    },
    generation: '1'
  },
  {
    id: '52',
    species_id: '52',
    height: '4',
    weight: '42',
    type: 'normal',
    base_experience: '58',
    order: '80',
    is_default: '1',
    name: 'meowth',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/meowth.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif'
    },
    generation: '1'
  },
  {
    id: '53',
    species_id: '53',
    height: '10',
    weight: '320',
    type: 'normal',
    base_experience: '154',
    order: '82',
    is_default: '1',
    name: 'persian',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/persian.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/persian.gif'
    },
    generation: '1'
  },
  {
    id: '54',
    species_id: '54',
    height: '8',
    weight: '196',
    type: 'water',
    base_experience: '64',
    order: '84',
    is_default: '1',
    name: 'psyduck',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/psyduck.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif'
    },
    generation: '1'
  },
  {
    id: '55',
    species_id: '55',
    height: '17',
    weight: '766',
    type: 'water',
    base_experience: '175',
    order: '85',
    is_default: '1',
    name: 'golduck',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/golduck.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/golduck.gif'
    },
    generation: '1'
  },
  {
    id: '56',
    species_id: '56',
    height: '5',
    weight: '280',
    type: 'fighting',
    base_experience: '61',
    order: '86',
    is_default: '1',
    name: 'mankey',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/mankey.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/mankey.gif'
    },
    generation: '1'
  },
  {
    id: '57',
    species_id: '57',
    height: '10',
    weight: '320',
    type: 'fighting',
    base_experience: '159',
    order: '87',
    is_default: '1',
    name: 'primeape',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/primeape.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/primeape.gif'
    },
    generation: '1'
  },
  {
    id: '58',
    species_id: '58',
    height: '7',
    weight: '190',
    type: 'fire',
    base_experience: '70',
    order: '88',
    is_default: '1',
    name: 'growlithe',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/growlithe.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif'
    },
    generation: '1'
  },
  {
    id: '59',
    species_id: '59',
    height: '19',
    weight: '1550',
    type: 'fire',
    base_experience: '194',
    order: '89',
    is_default: '1',
    name: 'arcanine',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/arcanine.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif'
    },
    generation: '1'
  },
  {
    id: '60',
    species_id: '60',
    height: '6',
    weight: '124',
    type: 'water',
    base_experience: '60',
    order: '90',
    is_default: '1',
    name: 'poliwag',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/poliwag.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/poliwag.gif'
    },
    generation: '1'
  },
  {
    id: '61',
    species_id: '61',
    height: '10',
    weight: '200',
    type: 'water',
    base_experience: '135',
    order: '91',
    is_default: '1',
    name: 'poliwhirl',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/poliwhirl.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/poliwhirl.gif'
    },
    generation: '1'
  },
  {
    id: '62',
    species_id: '62',
    height: '13',
    weight: '540',
    type: 'water/fighting',
    base_experience: '230',
    order: '92',
    is_default: '1',
    name: 'poliwrath',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/poliwrath.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif'
    },
    generation: '1'
  },
  {
    id: '63',
    species_id: '63',
    height: '9',
    weight: '195',
    type: 'psychic',
    base_experience: '62',
    order: '94',
    is_default: '1',
    name: 'abra',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/abra.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/abra.gif'
    },
    generation: '1'
  },
  {
    id: '64',
    species_id: '64',
    height: '13',
    weight: '565',
    type: 'psychic',
    base_experience: '140',
    order: '95',
    is_default: '1',
    name: 'kadabra',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/kadabra.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/kadabra.gif'
    },
    generation: '1'
  },
  {
    id: '65',
    species_id: '65',
    height: '15',
    weight: '480',
    type: 'psychic',
    base_experience: '225',
    order: '96',
    is_default: '1',
    name: 'alakazam',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/alakazam.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif'
    },
    generation: '1'
  },
  {
    id: '66',
    species_id: '66',
    height: '8',
    weight: '195',
    type: 'fighting',
    base_experience: '61',
    order: '98',
    is_default: '1',
    name: 'machop',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/machop.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/machop.gif'
    },
    generation: '1'
  },
  {
    id: '67',
    species_id: '67',
    height: '15',
    weight: '705',
    type: 'fighting',
    base_experience: '142',
    order: '99',
    is_default: '1',
    name: 'machoke',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/machoke.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/machoke.gif'
    },
    generation: '1'
  },
  {
    id: '68',
    species_id: '68',
    height: '16',
    weight: '1300',
    type: 'fighting',
    base_experience: '227',
    order: '100',
    is_default: '1',
    name: 'machamp',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/machamp.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif'
    },
    generation: '1'
  },
  {
    id: '69',
    species_id: '69',
    height: '7',
    weight: '40',
    type: 'grass/poison',
    base_experience: '60',
    order: '101',
    is_default: '1',
    name: 'bellsprout',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/bellsprout.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/bellsprout.gif'
    },
    generation: '1'
  },
  {
    id: '70',
    species_id: '70',
    height: '10',
    weight: '64',
    type: 'grass/poison',
    base_experience: '137',
    order: '102',
    is_default: '1',
    name: 'weepinbell',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/weepinbell.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/weepinbell.gif'
    },
    generation: '1'
  },
  {
    id: '71',
    species_id: '71',
    height: '17',
    weight: '155',
    type: 'grass/poison',
    base_experience: '221',
    order: '103',
    is_default: '1',
    name: 'victreebel',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/victreebel.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/victreebel.gif'
    },
    generation: '1'
  },
  {
    id: '72',
    species_id: '72',
    height: '9',
    weight: '455',
    type: 'water/poison',
    base_experience: '67',
    order: '104',
    is_default: '1',
    name: 'tentacool',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/tentacool.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/tentacool.gif'
    },
    generation: '1'
  },
  {
    id: '73',
    species_id: '73',
    height: '16',
    weight: '550',
    type: 'water/poison',
    base_experience: '180',
    order: '105',
    is_default: '1',
    name: 'tentacruel',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/tentacruel.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/tentacruel.gif'
    },
    generation: '1'
  },
  {
    id: '74',
    species_id: '74',
    height: '4',
    weight: '200',
    type: 'rock/ground',
    base_experience: '60',
    order: '106',
    is_default: '1',
    name: 'geodude',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/geodude.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/geodude.gif'
    },
    generation: '1'
  },
  {
    id: '75',
    species_id: '75',
    height: '10',
    weight: '1050',
    type: 'rock/ground',
    base_experience: '137',
    order: '108',
    is_default: '1',
    name: 'graveler',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/graveler.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/graveler.gif'
    },
    generation: '1'
  },
  {
    id: '76',
    species_id: '76',
    height: '14',
    weight: '3000',
    type: 'rock/ground',
    base_experience: '223',
    order: '110',
    is_default: '1',
    name: 'golem',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/golem.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif'
    },
    generation: '1'
  },
  {
    id: '77',
    species_id: '77',
    height: '10',
    weight: '300',
    type: 'fire',
    base_experience: '82',
    order: '112',
    is_default: '1',
    name: 'ponyta',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/ponyta.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/ponyta.gif'
    },
    generation: '1'
  },
  {
    id: '78',
    species_id: '78',
    height: '17',
    weight: '950',
    type: 'fire',
    base_experience: '175',
    order: '113',
    is_default: '1',
    name: 'rapidash',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/rapidash.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/rapidash.gif'
    },
    generation: '1'
  },
  {
    id: '79',
    species_id: '79',
    height: '12',
    weight: '360',
    type: 'water/psychic',
    base_experience: '63',
    order: '114',
    is_default: '1',
    name: 'slowpoke',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/slowpoke.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/slowpoke.gif'
    },
    generation: '1'
  },
  {
    id: '80',
    species_id: '80',
    height: '16',
    weight: '785',
    type: 'water/psychic',
    base_experience: '172',
    order: '115',
    is_default: '1',
    name: 'slowbro',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/slowbro.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/slowbro.gif'
    },
    generation: '1'
  },
  {
    id: '81',
    species_id: '81',
    height: '3',
    weight: '60',
    type: 'electric/steel',
    base_experience: '65',
    order: '118',
    is_default: '1',
    name: 'magnemite',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/magnemite.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/magnemite.gif'
    },
    generation: '1'
  },
  {
    id: '82',
    species_id: '82',
    height: '10',
    weight: '600',
    type: 'electric/steel',
    base_experience: '163',
    order: '119',
    is_default: '1',
    name: 'magneton',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/magneton.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/magneton.gif'
    },
    generation: '1'
  },
  {
    id: '83',
    species_id: '83',
    height: '8',
    weight: '150',
    type: 'normal/flying',
    base_experience: '132',
    order: '121',
    is_default: '1',
    name: 'farfetchd',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/farfetchd.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/farfetchd.gif'
    },
    generation: '1'
  },
  {
    id: '84',
    species_id: '84',
    height: '14',
    weight: '392',
    type: 'normal/flying',
    base_experience: '62',
    order: '122',
    is_default: '1',
    name: 'doduo',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/doduo.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/doduo.gif'
    },
    generation: '1'
  },
  {
    id: '85',
    species_id: '85',
    height: '18',
    weight: '852',
    type: 'normal/flying',
    base_experience: '165',
    order: '123',
    is_default: '1',
    name: 'dodrio',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/dodrio.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/dodrio.gif'
    },
    generation: '1'
  },
  {
    id: '86',
    species_id: '86',
    height: '11',
    weight: '900',
    type: 'water',
    base_experience: '65',
    order: '124',
    is_default: '1',
    name: 'seel',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/seel.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/seel.gif'
    },
    generation: '1'
  },
  {
    id: '87',
    species_id: '87',
    height: '17',
    weight: '1200',
    type: 'water/ice',
    base_experience: '166',
    order: '125',
    is_default: '1',
    name: 'dewgong',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/dewgong.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/dewgong.gif'
    },
    generation: '1'
  },
  {
    id: '88',
    species_id: '88',
    height: '9',
    weight: '300',
    type: 'poison',
    base_experience: '65',
    order: '126',
    is_default: '1',
    name: 'grimer',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/grimer.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/grimer.gif'
    },
    generation: '1'
  },
  {
    id: '89',
    species_id: '89',
    height: '12',
    weight: '300',
    type: 'poison',
    base_experience: '175',
    order: '128',
    is_default: '1',
    name: 'muk',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/muk.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/muk.gif'
    },
    generation: '1'
  },
  {
    id: '90',
    species_id: '90',
    height: '3',
    weight: '40',
    type: 'water',
    base_experience: '61',
    order: '130',
    is_default: '1',
    name: 'shellder',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/shellder.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/shellder.gif'
    },
    generation: '1'
  },
  {
    id: '91',
    species_id: '91',
    height: '15',
    weight: '1325',
    type: 'water/ice',
    base_experience: '184',
    order: '131',
    is_default: '1',
    name: 'cloyster',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/cloyster.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/cloyster.gif'
    },
    generation: '1'
  },
  {
    id: '92',
    species_id: '92',
    height: '13',
    weight: '1',
    type: 'ghost/poison',
    base_experience: '62',
    order: '132',
    is_default: '1',
    name: 'gastly',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/gastly.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/gastly.gif'
    },
    generation: '1'
  },
  {
    id: '93',
    species_id: '93',
    height: '16',
    weight: '1',
    type: 'ghost/poison',
    base_experience: '142',
    order: '133',
    is_default: '1',
    name: 'haunter',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/haunter.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif'
    },
    generation: '1'
  },
  {
    id: '94',
    species_id: '94',
    height: '15',
    weight: '405',
    type: 'ghost/poison',
    base_experience: '225',
    order: '134',
    is_default: '1',
    name: 'gengar',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/gengar.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif'
    },
    generation: '1'
  },
  {
    id: '95',
    species_id: '95',
    height: '88',
    weight: '2100',
    type: 'rock/ground',
    base_experience: '77',
    order: '136',
    is_default: '1',
    name: 'onix',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/onix.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif'
    },
    generation: '1'
  },
  {
    id: '96',
    species_id: '96',
    height: '10',
    weight: '324',
    type: 'psychic',
    base_experience: '66',
    order: '139',
    is_default: '1',
    name: 'drowzee',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/drowzee.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/drowzee.gif'
    },
    generation: '1'
  },
  {
    id: '97',
    species_id: '97',
    height: '16',
    weight: '756',
    type: 'psychic',
    base_experience: '169',
    order: '140',
    is_default: '1',
    name: 'hypno',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/hypno.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/hypno.gif'
    },
    generation: '1'
  },
  {
    id: '98',
    species_id: '98',
    height: '4',
    weight: '65',
    type: 'water',
    base_experience: '65',
    order: '141',
    is_default: '1',
    name: 'krabby',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/krabby.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/krabby.gif'
    },
    generation: '1'
  },
  {
    id: '99',
    species_id: '99',
    height: '13',
    weight: '600',
    type: 'water',
    base_experience: '166',
    order: '142',
    is_default: '1',
    name: 'kingler',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/kingler.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/kingler.gif'
    },
    generation: '1'
  },
  {
    id: '100',
    species_id: '100',
    height: '5',
    weight: '104',
    type: 'electric',
    base_experience: '66',
    order: '143',
    is_default: '1',
    name: 'voltorb',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/voltorb.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif'
    },
    generation: '1'
  },
  {
    id: '101',
    species_id: '101',
    height: '12',
    weight: '666',
    type: 'electric',
    base_experience: '172',
    order: '144',
    is_default: '1',
    name: 'electrode',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/electrode.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/electrode.gif'
    },
    generation: '1'
  },
  {
    id: '102',
    species_id: '102',
    height: '4',
    weight: '25',
    type: 'grass/psychic',
    base_experience: '65',
    order: '145',
    is_default: '1',
    name: 'exeggcute',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/exeggcute.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/exeggcute.gif'
    },
    generation: '1'
  },
  {
    id: '103',
    species_id: '103',
    height: '20',
    weight: '1200',
    type: 'grass/psychic',
    base_experience: '186',
    order: '146',
    is_default: '1',
    name: 'exeggutor',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/exeggutor.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/exeggutor.gif'
    },
    generation: '1'
  },
  {
    id: '104',
    species_id: '104',
    height: '4',
    weight: '65',
    type: 'ground',
    base_experience: '64',
    order: '148',
    is_default: '1',
    name: 'cubone',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/cubone.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/cubone.gif'
    },
    generation: '1'
  },
  {
    id: '105',
    species_id: '105',
    height: '10',
    weight: '450',
    type: 'ground',
    base_experience: '149',
    order: '149',
    is_default: '1',
    name: 'marowak',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/marowak.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/marowak.gif'
    },
    generation: '1'
  },
  {
    id: '106',
    species_id: '106',
    height: '15',
    weight: '498',
    type: 'fighting',
    base_experience: '159',
    order: '153',
    is_default: '1',
    name: 'hitmonlee',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/hitmonlee.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/hitmonlee.gif'
    },
    generation: '1'
  },
  {
    id: '107',
    species_id: '107',
    height: '14',
    weight: '502',
    type: 'fighting',
    base_experience: '159',
    order: '154',
    is_default: '1',
    name: 'hitmonchan',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/hitmonchan.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/hitmonchan.gif'
    },
    generation: '1'
  },
  {
    id: '108',
    species_id: '108',
    height: '12',
    weight: '655',
    type: 'normal',
    base_experience: '77',
    order: '156',
    is_default: '1',
    name: 'lickitung',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/lickitung.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/lickitung.gif'
    },
    generation: '1'
  },
  {
    id: '109',
    species_id: '109',
    height: '6',
    weight: '10',
    type: 'poison',
    base_experience: '68',
    order: '158',
    is_default: '1',
    name: 'koffing',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/koffing.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/koffing.gif'
    },
    generation: '1'
  },
  {
    id: '110',
    species_id: '110',
    height: '12',
    weight: '95',
    type: 'poison',
    base_experience: '172',
    order: '159',
    is_default: '1',
    name: 'weezing',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/weezing.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif'
    },
    generation: '1'
  },
  {
    id: '111',
    species_id: '111',
    height: '10',
    weight: '1150',
    type: 'ground/rock',
    base_experience: '69',
    order: '160',
    is_default: '1',
    name: 'rhyhorn',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/rhyhorn.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/rhyhorn.gif'
    },
    generation: '1'
  },
  {
    id: '112',
    species_id: '112',
    height: '19',
    weight: '1200',
    type: 'ground/rock',
    base_experience: '170',
    order: '161',
    is_default: '1',
    name: 'rhydon',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/rhydon.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/rhydon.gif'
    },
    generation: '1'
  },
  {
    id: '113',
    species_id: '113',
    height: '11',
    weight: '346',
    type: 'normal',
    base_experience: '395',
    order: '164',
    is_default: '1',
    name: 'chansey',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/chansey.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/chansey.gif'
    },
    generation: '1'
  },
  {
    id: '114',
    species_id: '114',
    height: '10',
    weight: '350',
    type: 'grass',
    base_experience: '87',
    order: '166',
    is_default: '1',
    name: 'tangela',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/tangela.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/tangela.gif'
    },
    generation: '1'
  },
  {
    id: '115',
    species_id: '115',
    height: '22',
    weight: '800',
    type: 'normal',
    base_experience: '172',
    order: '168',
    is_default: '1',
    name: 'kangaskhan',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/kangaskhan.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/kangaskhan.gif'
    },
    generation: '1'
  },
  {
    id: '116',
    species_id: '116',
    height: '4',
    weight: '80',
    type: 'water',
    base_experience: '59',
    order: '170',
    is_default: '1',
    name: 'horsea',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/horsea.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/horsea.gif'
    },
    generation: '1'
  },
  {
    id: '117',
    species_id: '117',
    height: '12',
    weight: '250',
    type: 'water',
    base_experience: '154',
    order: '171',
    is_default: '1',
    name: 'seadra',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/seadra.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/seadra.gif'
    },
    generation: '1'
  },
  {
    id: '118',
    species_id: '118',
    height: '6',
    weight: '150',
    type: 'water',
    base_experience: '64',
    order: '173',
    is_default: '1',
    name: 'goldeen',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/goldeen.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/goldeen.gif'
    },
    generation: '1'
  },
  {
    id: '119',
    species_id: '119',
    height: '13',
    weight: '390',
    type: 'water',
    base_experience: '158',
    order: '174',
    is_default: '1',
    name: 'seaking',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/seaking.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/seaking.gif'
    },
    generation: '1'
  },
  {
    id: '120',
    species_id: '120',
    height: '8',
    weight: '345',
    type: 'water',
    base_experience: '68',
    order: '175',
    is_default: '1',
    name: 'staryu',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/staryu.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/staryu.gif'
    },
    generation: '1'
  },
  {
    id: '121',
    species_id: '121',
    height: '11',
    weight: '800',
    type: 'water',
    base_experience: '182',
    order: '176',
    is_default: '1',
    name: 'starmie',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/starmie.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/starmie.gif'
    },
    generation: '1'
  },
  {
    id: '122',
    species_id: '122',
    height: '13',
    weight: '545',
    type: 'psychic/fairy',
    base_experience: '161',
    order: '178',
    is_default: '1',
    name: 'mr-mime',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/mr-mime.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/mr-mime.gif'
    },
    generation: '1'
  },
  {
    id: '123',
    species_id: '123',
    height: '15',
    weight: '560',
    type: 'bug/flying',
    base_experience: '100',
    order: '179',
    is_default: '1',
    name: 'scyther',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/scyther.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/scyther.gif'
    },
    generation: '1'
  },
  {
    id: '124',
    species_id: '124',
    height: '14',
    weight: '406',
    type: 'ice/psychic',
    base_experience: '159',
    order: '183',
    is_default: '1',
    name: 'jynx',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/jynx.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/jynx.gif'
    },
    generation: '1'
  },
  {
    id: '125',
    species_id: '125',
    height: '11',
    weight: '300',
    type: 'electric',
    base_experience: '172',
    order: '185',
    is_default: '1',
    name: 'electabuzz',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/electabuzz.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/electabuzz.gif'
    },
    generation: '1'
  },
  {
    id: '126',
    species_id: '126',
    height: '13',
    weight: '445',
    type: 'fire',
    base_experience: '173',
    order: '188',
    is_default: '1',
    name: 'magmar',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/magmar.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/magmar.gif'
    },
    generation: '1'
  },
  {
    id: '127',
    species_id: '127',
    height: '15',
    weight: '550',
    type: 'bug',
    base_experience: '175',
    order: '190',
    is_default: '1',
    name: 'pinsir',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/pinsir.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/pinsir.gif'
    },
    generation: '1'
  },
  {
    id: '128',
    species_id: '128',
    height: '14',
    weight: '884',
    type: 'normal',
    base_experience: '172',
    order: '192',
    is_default: '1',
    name: 'tauros',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/tauros.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/tauros.gif'
    },
    generation: '1'
  },
  {
    id: '129',
    species_id: '129',
    height: '9',
    weight: '100',
    type: 'water',
    base_experience: '40',
    order: '193',
    is_default: '1',
    name: 'magikarp',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/magikarp.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/magikarp.gif'
    },
    generation: '1'
  },
  {
    id: '130',
    species_id: '130',
    height: '65',
    weight: '2350',
    type: 'water/flying',
    base_experience: '189',
    order: '194',
    is_default: '1',
    name: 'gyarados',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/gyarados.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif'
    },
    generation: '1'
  },
  {
    id: '131',
    species_id: '131',
    height: '25',
    weight: '2200',
    type: 'water/ice',
    base_experience: '187',
    order: '196',
    is_default: '1',
    name: 'lapras',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/lapras.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/lapras.gif'
    },
    generation: '1'
  },
  {
    id: '132',
    species_id: '132',
    height: '3',
    weight: '40',
    type: 'normal',
    base_experience: '101',
    order: '197',
    is_default: '1',
    name: 'ditto',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/ditto.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/ditto.gif'
    },
    generation: '1'
  },
  {
    id: '133',
    species_id: '133',
    height: '3',
    weight: '65',
    type: 'normal',
    base_experience: '65',
    order: '198',
    is_default: '1',
    name: 'eevee',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/eevee.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif'
    },
    generation: '1'
  },
  {
    id: '134',
    species_id: '134',
    height: '10',
    weight: '290',
    type: 'water',
    base_experience: '184',
    order: '199',
    is_default: '1',
    name: 'vaporeon',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/vaporeon.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/vaporeon.gif'
    },
    generation: '1'
  },
  {
    id: '135',
    species_id: '135',
    height: '8',
    weight: '245',
    type: 'electric',
    base_experience: '184',
    order: '200',
    is_default: '1',
    name: 'jolteon',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/jolteon.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/jolteon.gif'
    },
    generation: '1'
  },
  {
    id: '136',
    species_id: '136',
    height: '9',
    weight: '250',
    type: 'fire',
    base_experience: '184',
    order: '201',
    is_default: '1',
    name: 'flareon',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/flareon.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif'
    },
    generation: '1'
  },
  {
    id: '137',
    species_id: '137',
    height: '8',
    weight: '365',
    type: 'normal',
    base_experience: '79',
    order: '207',
    is_default: '1',
    name: 'porygon',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/porygon.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/porygon.gif'
    },
    generation: '1'
  },
  {
    id: '138',
    species_id: '138',
    height: '4',
    weight: '75',
    type: 'rock/water',
    base_experience: '71',
    order: '210',
    is_default: '1',
    name: 'omanyte',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/omanyte.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/omanyte.gif'
    },
    generation: '1'
  },
  {
    id: '139',
    species_id: '139',
    height: '10',
    weight: '350',
    type: 'rock/water',
    base_experience: '173',
    order: '211',
    is_default: '1',
    name: 'omastar',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/omastar.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/omastar.gif'
    },
    generation: '1'
  },
  {
    id: '140',
    species_id: '140',
    height: '5',
    weight: '115',
    type: 'rock/water',
    base_experience: '71',
    order: '212',
    is_default: '1',
    name: 'kabuto',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/kabuto.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/kabuto.gif'
    },
    generation: '1'
  },
  {
    id: '141',
    species_id: '141',
    height: '13',
    weight: '405',
    type: 'rock/water',
    base_experience: '173',
    order: '213',
    is_default: '1',
    name: 'kabutops',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/kabutops.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/kabutops.gif'
    },
    generation: '1'
  },
  {
    id: '142',
    species_id: '142',
    height: '18',
    weight: '590',
    type: 'rock/flying',
    base_experience: '180',
    order: '214',
    is_default: '1',
    name: 'aerodactyl',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/aerodactyl.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/aerodactyl.gif'
    },
    generation: '1'
  },
  {
    id: '143',
    species_id: '143',
    height: '21',
    weight: '4600',
    type: 'normal',
    base_experience: '189',
    order: '217',
    is_default: '1',
    name: 'snorlax',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/snorlax.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif'
    },
    generation: '1'
  },
  {
    id: '144',
    species_id: '144',
    height: '17',
    weight: '554',
    type: 'ice/flying',
    base_experience: '261',
    order: '218',
    is_default: '1',
    name: 'articuno',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/articuno.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/articuno.gif'
    },
    generation: '1'
  },
  {
    id: '145',
    species_id: '145',
    height: '16',
    weight: '526',
    type: 'electric/flying',
    base_experience: '261',
    order: '219',
    is_default: '1',
    name: 'zapdos',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/zapdos.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/zapdos.gif'
    },
    generation: '1'
  },
  {
    id: '146',
    species_id: '146',
    height: '20',
    weight: '600',
    type: 'fire/flying',
    base_experience: '261',
    order: '220',
    is_default: '1',
    name: 'moltres',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/moltres.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/moltres.gif'
    },
    generation: '1'
  },
  {
    id: '147',
    species_id: '147',
    height: '18',
    weight: '33',
    type: 'dragon',
    base_experience: '60',
    order: '221',
    is_default: '1',
    name: 'dratini',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/dratini.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif'
    },
    generation: '1'
  },
  {
    id: '148',
    species_id: '148',
    height: '40',
    weight: '165',
    type: 'dragon',
    base_experience: '147',
    order: '222',
    is_default: '1',
    name: 'dragonair',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/dragonair.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/dragonair.gif'
    },
    generation: '1'
  },
  {
    id: '149',
    species_id: '149',
    height: '22',
    weight: '2100',
    type: 'dragon',
    base_experience: '270',
    order: '223',
    is_default: '1',
    name: 'dragonite',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/dragonite.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif'
    },
    generation: '1'
  },
  {
    id: '150',
    species_id: '150',
    height: '20',
    weight: '1220',
    type: 'psychic',
    base_experience: '306',
    order: '224',
    is_default: '1',
    name: 'mewtwo',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/mewtwo.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif'
    },
    generation: '1'
  },
  {
    id: '151',
    species_id: '151',
    height: '4',
    weight: '40',
    type: 'psychic',
    base_experience: '270',
    order: '227',
    is_default: '1',
    name: 'mew',
    sprites: {
      normal: 'http://img.pokemondb.net/sprites/black-white/normal/mew.png',
      animated: 'http://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif'
    },
    generation: '1'
  }
];

export default pokemons1;
