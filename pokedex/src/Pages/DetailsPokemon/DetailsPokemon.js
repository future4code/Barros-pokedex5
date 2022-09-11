import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { Botao } from "./styled"



export function DetailsPokemon() {

    const navigate = useNavigate(); 
    const goToDetailsPokemon = () =>{
        navigate("../../Pages/DetailsPokemon/DetailsPokemon.js")
    }

<Botao onClick={goToDetailsPokemon}>Voltar</Botao>


    return (
        <h1>Página Detalhes do Pokemon</h1>
    )
    
};

export default DetailsPokemon;