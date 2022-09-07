import React from "react";

import  CardPokemon  from "../../Components/CardPokemon/CardPokemon";
import { Header } from "../../Components/Header/Header";
import useRequestData from "../../Hooks/UseRequestData";
import { BASE_URL } from "../../Constantes/urls";
import { ListPokemonContainer } from "./styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CardContainer } from "../../Components/CardPokemon/styled";


function ListPokemon () {
    const navigate = useNavigate();
    
    const goToPokedex = () => {
        navigate("/pokedex")
    }

  
    const data = useRequestData(`${BASE_URL}`);
    console.log(data)
   



    return (
       
    
            <main>
                <ListPokemonContainer>
                    
                    <CardPokemon/>
                    <CardPokemon/>
                </ListPokemonContainer>
                
            <h1> Lista Pokemon (Home) </h1>
            <button onClick={ goToPokedex}>Entrar</button>
       </main>
    )
}
export default ListPokemon;

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