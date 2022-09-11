
import React, { useContext } from "react";
import { Header } from "../../Components/Header/styled";
import GlobalStateContext from "../../Context/ContextGlobalState";
import { ListContainer } from "./styled";
import CardPokemon from "../../Components/CardPokemon/PokemonCard"
import { Titulo } from "./styled";

const ListPokemon = () => {
  const { pokemons } = useContext(GlobalStateContext);

  return (
    <>     
      <Header>
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