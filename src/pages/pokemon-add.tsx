import React, { FunctionComponent, useState } from 'react';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import usePokemons from '../hooks/pokemons.hook';


const PokemonAdd: FunctionComponent = () => {

    const pokemons = usePokemons();

    const generateUniqueId = (): string => {
        let number: number;
        do {
            number = Math.floor(Math.random() * 98) + 1;
        } while (pokemons.some(pokemon => pokemon.id === number.toString()));
        return number.toString();
    };

    const [id] = useState<string>(generateUniqueId());
    const [pokemon] = useState<Pokemon>(new Pokemon(id));


    return (
        <div>
            <div className="row">
                <h2 className="header center">Ajouter un Pokemon</h2>
                <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
            </div>
        </div>
    );
}

export default PokemonAdd;