import React, { useContext } from "react";

import {
  CardContainer,
  ImagemContainer,
  ImagemPokemon,
  ButtonAddRemoveContainer,
  NamePokemon
 
} from "./styled";
import ContextGlobalState from "../../Context/ContextGlobalState";

const PokemonCard = (props) => {
 
  const { pokemons, setPokemons, pokedex, setPokedex } = useContext(
    ContextGlobalState
  );

  const addToPokedex = () => {
    const pokeIndex = pokemons.findIndex(
      (item) => item.name === props.pokemon.name
    );
    const newPokemonsList = [...pokemons];
    newPokemonsList.splice(pokeIndex, 1);
    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokedexList = [...pokedex, props.pokemon];
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  };

  const removeFromPokedex = () => {
    const pokeIndex = pokedex.findIndex(
      (item) => item.name === props.pokemon.name
    );

    const newPokedexList = [...pokedex];
    newPokedexList.splice(pokeIndex, 1);
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokemonsList = [...pokemons, props.pokemon];
    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  };

  return (
    <CardContainer>
      <ImagemContainer>
        <ImagemPokemon
          src={props.pokemon && props.pokemon.sprites.front_default}
          alt={props.pokemon.name}
        />
      </ImagemContainer>

      <NamePokemon>
          <h3>{props.pokemon.name}</h3>
      </NamePokemon>
   
      <ButtonAddRemoveContainer>
      <button onClick={props.isPokedex ? removeFromPokedex : addToPokedex}>
          {props.isPokedex ? "Remover" : "Adicionar Pokemon"}
        </button>
        
      </ButtonAddRemoveContainer>

    </CardContainer>
  );
};

export default PokemonCard;









