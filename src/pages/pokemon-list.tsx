import React, { FunctionComponent, useEffect, useState } from 'react';
import PokemonCard from '../components/pokemon-card';
import { Link } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import PokemonService from '../services/pokemon-service';
import Loader from '../components/loader';
import PokemonsApi from '../models/pokemonsApi';

const PokemonList: FunctionComponent = () => {

  const [pokemonResults, setPokemonResults] = useState<PokemonsApi | null>(null);

  useEffect(() => {
    PokemonService.getPokemonsFromApi()
      .then((data: PokemonsApi) => setPokemonResults(data))
      .catch(error => console.error('Erreur lors de la récupération des pokemons :', error));
  }, []);

  if (!pokemonResults) {
    return <div className="container center"><Loader /></div>;
  }

  return (
    <div>
      <div className="container">
        <h1 className="center">Liste des Pokemons</h1>
        <div className="row">
          <PokemonSearch />
          {pokemonResults.results.map(pokemon => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
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