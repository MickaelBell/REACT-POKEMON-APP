import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import usePokemon from '../hooks/pokemon.hook';

type Params = { id: string };

const PokemonEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

    const pokemon = usePokemon(match);

    return (
        <div>
            {pokemon ? (
                <div className="row">
                    <h2 className="header center">Éditer {pokemon.name}</h2>
                    <PokemonForm pokemon={pokemon}></PokemonForm>
                </div>
            ) : (
                <h4 className="center">Aucun pokémon à afficher !</h4>
            )}
        </div>
    );
}

export default PokemonEdit;