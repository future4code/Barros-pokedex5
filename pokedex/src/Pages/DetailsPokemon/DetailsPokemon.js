import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../Components/Header/styled";
import ContextGlobalState from "../../Context/ContextGlobalState";
import { goToPokedex } from "../../routes/coordinator";
import { Titulo } from "../ListPokemon/styled";
import { DetalhesContainer } from "./styled";
import { BASE_URL } from "../../Constantes/urls";

const DetailsPokemon = () => {
    const navigate = useNavigate()
    const [selectedPokemon, setSelectedPokemon] = useState()
    const {name} = useParams()
    const {pokemons} = useContext(ContextGlobalState)

    useEffect(() =>{
        const currentPokemon = pokemons.find((item) => {return item.name === name})
        setSelectedPokemon(currentPokemon)
    }, [])

    return(
        <>
    
        <Header>
        <button onClick={() => goToPokedex(navigate)}>Voltar</button>
            <Titulo>{"Detalhes Pokemon"}</Titulo>
        </Header>

        <DetalhesContainer>
            {selectedPokemon && selectedPokemon.sprites &&
            <div>
        <img src={selectedPokemon.sprites.front_default}/>
        <img src={selectedPokemon.sprites.back_default}/>
            </div>
             }
            <div>
                <h1>Poderes</h1>
                {selectedPokemon && selectedPokemon.stats&&selectedPokemon.stats.map((stat)=>{
                    return (
                        <p key={stat.stat.name}>
                          <strong>{stat.stat.name}</strong>{stat.base_stat}
                        </p>
                    )})}
            </div>
            <>
            <>
            
            {selectedPokemon && selectedPokemon.types && selectedPokemon.types.map((type)=>{
                return <p key={type.type.name}>{type.type.name}</p>
            })}
            </>
            <>
            
            
            <h1>Principais ataques</h1>
            {selectedPokemon && selectedPokemon.moves && selectedPokemon.moves.map((move, index) =>{
                return(
                    index < 5 && <p key={move.move.name}>{move.move.name}</p>
                )
            })}
            </>
            </>
            </DetalhesContainer>
            </>
        
        
       
    )
}
export default DetailsPokemon;