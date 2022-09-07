import React from "react";
import { useNavigate } from "react-router-dom";

export function DetailsPokemon() {

    const navigate = useNavigate(); 

    const goToDetailsPokemon = () =>{
        navigate("/DetailsPokemon")
    }

    return (


        
        <section>
        <h1>ola</h1>

        <button onClick={ goToDetailsPokemon}>Voltar</button>
        </section>
    )
};

export default DetailsPokemon;