import React from "react";
import  CardPokemon  from "../../Components/CardPokemon/CardPokemon";
import { Header } from "../../Components/Header/Header";
import useRequestData from "../../Hooks/UseRequestData";
import { BASE_URL } from "../../Constantes/urls";
import { ListPokemonContainer } from "./styled";
import axios from "axios";
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






