

import useRequestData from "../../Hooks/UseRequestData";
import { BASE_URL } from "../../Constantes/urls";
import { ListPokemonContainer } from "./styled";
import { useNavigate } from "react-router-dom";


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








//----------------------------------------
/*
const ListPokemon = () => {
    const navigate = useNavigate();
    
    const goToPokedex = () => {
        navigate("/pokedex")
    }
  
    const data = useRequestData(`${BASE_URL}`);
   

    return (  
            <main>
                <Titulo> Lista Pokemon (Home) </Titulo>
                <ListPokemonContainer>
                    
                {data && data.pokemons.map((pokemon) => {
            return <CardPokemon key={pokemon.name} pokemon={pokemon} /> 
            })}                   
                </ListPokemonContainer>
                
            
            <button onClick={ goToPokedex}>Entrar</button>
       </main>
    );
};
export default ListPokemon;

*/

//---------------------------------

/*
export function ListPokemon() {
    const data = useRequestData(`${BASE_URL}`);
    return (
        
        <ListPokemonContainer>
            <h1>Página Lista de Pokemon (Home)</h1>
        {data && data.pokemons.map((pokemon) => {
            return <CardPokemon key={pokemon.id} pokemon={pokemon} /> // FAlta adicionar addtocart
          })}
          </ListPokemonContainer>

       // <Header/>
       // <CardPokemon/>
    )
};

export default ListPokemon;
*/