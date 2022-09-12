import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header/styled";
import ContextGlobalState from "../../Context/ContextGlobalState";
import { goToDetailsPokemon, goToListPokemon } from "../../routes/coordinator";
import { Titulo } from "../ListPokemon/styled";
import CardPokemon from "../../Components/CardPokemon/PokemonCard";
import PokemonCard from "../../Components/CardPokemon/PokemonCard";
import { CardContainer } from "../../Components/CardPokemon/styled";

const Pokedex = () => {
    const navigate = useNavigate()
    const {pokedex} = useContext(ContextGlobalState)

    return(
        <>
        <Header>
            <button onClick={() => goToListPokemon(navigate)}>Voltar</button>
            <Titulo>Pokedéx</Titulo>
        </Header>

        <div>
            {
                pokedex && pokedex.map((poke) => {
                    return <PokemonCard key={poke.name} isPokedex pokemon={poke} 
                    />
                    
                    
                })
                
            }
            
        
        </div>
        </>
    )

}

export default Pokedex;