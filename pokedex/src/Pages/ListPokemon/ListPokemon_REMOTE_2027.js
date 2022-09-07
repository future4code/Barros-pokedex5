import React from "react";
import { useNavigate } from "react-router-dom";
import { CardPokemon } from "../../Components/CardPokemon/CardPokemon";
import { Header } from "../../Components/Header/Header";

function ListPokemon () {

    const navigate = useNavigate();
    
    const goToPokedex = () => {
        navigate("/pokedex")
    }

    return (
        <section>
            <h1> Lista Pokemon (Home) </h1>
            <button onClick={ goToPokedex}>Entrar</button>
        </section>
    )
}

export default ListPokemon;






