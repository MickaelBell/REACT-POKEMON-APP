import { useState, useEffect } from "react";
import Pokemon from "../models/pokemon";


const usePokemon = (match: any) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3001/pokemons/${match.params.id}`)
            .then(response => response.json())
            .then(pokemon => {
                if (pokemon.id) setPokemon(pokemon)
            })

    }, [match.params.id]);
    return pokemon;
};

export default usePokemon