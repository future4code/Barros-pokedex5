import React from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import styled, { Botao } from "./styled"


=======
>>>>>>> master

export function DetailsPokemon() {

    const navigate = useNavigate(); 
<<<<<<< HEAD
    const goToDetailsPokemon = () =>{
        navigate("../../Pages/DetailsPokemon/DetailsPokemon.js")
    }

<Botao onClick={goToDetailsPokemon}>Voltar</Botao>


=======

    const goToDetailsPokemon = () =>{
        navigate("/DetailsPokemon")
    }

>>>>>>> master
    return (


        
        <section>
        <h1>ola</h1>

        <button onClick={ goToDetailsPokemon}>Voltar</button>
        </section>
    )
    
};

export default DetailsPokemon;