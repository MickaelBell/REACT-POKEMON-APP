import React, { FunctionComponent } from 'react';
import PokemonCard from '../components/pokemon-card';
import usePokemons from '../hooks/pokemons.hook';
import { Link } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';

const PokemonList: FunctionComponent = () => {
  const pokemons = usePokemons();

  return (
    <div>

      <div className="container">
        <h1 className="center">Liste des Pokemons</h1>
        <div className="row">
          <PokemonSearch />
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        <Link to={`/pokemons/add`} className="btn-floating btn-large red waves-effect waves-light z-depth-3"
          style={{ position: 'fixed', bottom: '25px', right: '25px' }}>
          <i className='material-icons'>add</i>
        </Link>
      </div>
    </div>
  );
}

export default PokemonList;