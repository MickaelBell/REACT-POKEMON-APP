import { useState, useEffect } from "react";
import Pokemon from "../models/pokemon";
import PokemonService from "../services/pokemon-service";


const usePokemon = (match: any) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        PokemonService.getPokemon(+match.params.id).then(pokemon => setPokemon(pokemon));
    }, [match.params.id]);
    return pokemon;
};

export default usePokemon