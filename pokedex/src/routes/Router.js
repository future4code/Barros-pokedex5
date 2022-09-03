import React from "react";
import {ListPokemon} from "../Pages/ListPokemon/ListPokemon";
import {Pokedex} from "../Pages/Pokedex/Pokedex";
import {DetailsPokemon} from "../Pages/DetailsPokemon/DetailsPokemon";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<ListPokemon/>} />
                <Route path={"/Pokedex"} element={<Pokedex/>} />
                <Route path={"/DetailsPokemon"} element={ <DetailsPokemon/>} />
            </Routes>
        </BrowserRouter>
    )
       
}
