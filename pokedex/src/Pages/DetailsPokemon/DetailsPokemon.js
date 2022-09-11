import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { Botao } from "./styled"

export function DetailsPokemon() {

    const navigate = useNavigate(); 
    const goToDetailsPokemon = () =>{
        navigate("../../Pages/DetailsPokemon/DetailsPokemon.js")
    }

<Botao onClick={goToDetailsPokemon}>Voltar</Botao>

    return 
    (
 
        <section>
        <h1>ola</h1>

        <button onClick={ goToDetailsPokemon}>Voltar</button>
        </section>
    )
    
};

export default DetailsPokemon;