import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      filteredType: '',
    };
    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.fetchFilteredPokemon = this.fetchFilteredPokemon.bind(this);
  }

  nextPokemon(number) {
    this.setState((state) => ({
      pokemonIndex: (state.pokemonIndex + 1) % number,
    }));
  }

  filterPokemon(filteredType) {
    this.setState({ filteredType, pokemonIndex: 0 });
  }

  fetchFilteredPokemon() {
    const { pokemonList } = this.props;
    const { filteredType } = this.state;

    return pokemonList.filter((pokemon) => {
      if (filteredType === '') return true;
      return pokemon.type === filteredType;
    });
  }

  render() {
    const { pokemonIndex } = this.state;
    const filterPokemon = this.fetchFilteredPokemon();
    const pokemon = filterPokemon[pokemonIndex];
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={ pokemon } />
          <button
            type="button"
            onClick={ () => this.filterPokemon('Fire') }
          >
            Fire
          </button>
          <button
            type="button"
            onClick={ () => this.filterPokemon('Psychic') }
          >
            Psychic
          </button>
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
