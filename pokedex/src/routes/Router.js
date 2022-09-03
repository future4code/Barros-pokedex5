import React from "react";
import ListPokemon from "../Pages/ListPokemon/ListPokemon";
import Pokedex from "./Pokedex";
import DetailsPokemon from "../Pages/DetailsPokemon/DetailsPokemon";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={ <ListPokemon />} />
            <Route path="/Pokedex" element={ <Pokedex/>} />
            <Route path="/DetailsPokemon" element={ <DetailsPokemon/>} />
        </Routes>
        </BrowserRouter>
    )
       
}
export default Router;