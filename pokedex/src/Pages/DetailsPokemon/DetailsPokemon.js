import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetailsPokemon } from "../../routes/coordinator";



export function DetailsPokemon() {

    const navigate = useNavigate(); 

    const goToDetailsPokemon = () =>{
        navigate("/DetailsPokemon")
    }



    return (


        
        <section>
        <h1>Fagner Fontes</h1>

        <button onClick={ goToDetailsPokemon}>Voltar</button>
        </section>
    )
};

export default DetailsPokemon;