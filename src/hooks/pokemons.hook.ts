import { useState, useEffect } from "react";
import Pokemon from "../models/pokemon";


const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    useEffect(() => {
        fetch("http://localhost:3001/pokemons")
            .then(response => response.json())
            .then(pokemons => setPokemons(pokemons))
    }, []);
    return pokemons;
};

export default usePokemons