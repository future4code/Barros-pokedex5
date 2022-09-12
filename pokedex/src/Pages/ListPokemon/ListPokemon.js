
import React, { useContext } from "react";
import { Header } from "../../Components/Header/styled";
import GlobalStateContext from "../../Context/ContextGlobalState";
import { ListContainer } from "./styled";
import CardPokemon from "../../Components/CardPokemon/PokemonCard"
import { Titulo } from "./styled";
import { goToPokedex } from "../../routes/coordinator";
import { Navigate, useNavigate } from "react-router-dom";

const ListPokemon = () => {
  const navigate = useNavigate()
  const { pokemons } = useContext(GlobalStateContext);


  return (
    <>     
      <Header>
        <button onClick={() => goToPokedex(navigate)}>Ver Lista POKEDEX!</button>
        <Titulo> {"Lista de Pokémons"}</Titulo>
        </Header>
      <ListContainer>
        {pokemons &&
          pokemons.map((pokemon) => {
            return <CardPokemon key={pokemon.name} pokemon={pokemon} />;
          })}

         
      </ListContainer>
    </>
  );
};
export default ListPokemon;