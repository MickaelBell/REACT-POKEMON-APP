import React, { FunctionComponent, useState } from "react";
import Pokemon from "../models/pokemon";
import './pokemon-car.css';
import formatType from "../helpers/format-type";
import { useHistory } from "react-router-dom";

type Props = {
  pokemon: any
  borderColor?: string
};

const PokemonCard: FunctionComponent<Props> = ({ pokemon, borderColor = '#009688' }) => {

  const [color, setColor] = useState<string>();
  const history = useHistory();
  const numberAtEnd = extractNumber(pokemon.url);

  function extractNumber(url: any) {
    const numberAtEndRegex = /(\d+)\/$/;
    const match = url.match(numberAtEndRegex);
    return match ? match[1].padStart(3, '0') : '';
  }

  const showBorder = () => {
    setColor(borderColor);
  }

  const hideBorder = () => {
    setColor('#f5f5f5');
  }

  const goToPokemon = (id: number) => {
    history.push(`/pokemons/${id}`);
  }

  return (
    <div className='col s6 m4' onClick={() => goToPokemon(pokemon.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
      <div className='card horizontal' style={{ borderColor: color }}>
        <div className='card-image'>
          <img src={'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + numberAtEnd + '.png'} alt=" "></img>
        </div>
        <div className='card-stacked'>
          <div className='card-content'>
            <p><strong>{pokemon.name.toUpperCase()}</strong></p>
            {/* {pokemon.types.map(type => (
              <span key={type} className={formatType(type)}>{type}</span>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;