import React, { FunctionComponent, useEffect, useState } from 'react';
import PokemonCard from '../components/pokemon-card';
import usePokemons from '../hooks/pokemons.hook';
import { Link } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import PokemonService from '../services/pokemon-service';
import PokemonApiResponse from '../models/pokemonsApi';
import Loader from '../components/loader';

const PokemonList: FunctionComponent = () => {
  // const pokemons = usePokemons();

  const [pokemonResults, setPokemonResults] = useState<PokemonApiResponse | null>(null);

  useEffect(() => {
    PokemonService.getPokemonsFromApi()
      .then((data: any) => setPokemonResults(data))
      .catch(error => console.error('Erreur lors de la récupération des pokemons :', error));
  }, []);


  console.log(pokemonResults);
  // console.log(pokemons);

  if (!pokemonResults) {
    return <div><Loader /></div>;
  }

  return (
    <div>

      <div className="container">
        <h1 className="center">Liste des Pokemons</h1>
        <div className="row">
          <div>
            <ul>
              {pokemonResults.results.map(pokemon => (
                <li key={pokemon.name}>
                  <strong>Nom:</strong> {pokemon.name} - <strong>URL:</strong> {pokemon.url}
                </li>
              ))}
            </ul>
          </div>
          {/* <PokemonSearch />
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))} */}
        </div>
        {/* <Link to={`/pokemons/add`} className="btn-floating btn-large red waves-effect waves-light z-depth-3"
          style={{ position: 'fixed', bottom: '25px', right: '25px' }}>
          <i className='material-icons'>add</i>
        </Link> */}
      </div>
    </div>
  );
}

export default PokemonList;