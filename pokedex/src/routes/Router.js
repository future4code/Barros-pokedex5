import React from "react";
import ListPokemon from "../Pages/ListPokemon/ListPokemon";
<<<<<<< HEAD
//import {ListPokemon} from "../Pages/ListPokemon/ListPokemon";
=======
>>>>>>> 8ebc482afd73a5b9f6ed149b7d2d3674b05371c0
import {Pokedex} from "../Pages/Pokedex/Pokedex";
import {DetailsPokemon} from "../Pages/DetailsPokemon/DetailsPokemon";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<ListPokemon/>} />
                <Route path={"/pokedex"} element={<Pokedex/>} />
                <Route path={"/detailsPokemon"} element={ <DetailsPokemon/>} />
            </Routes>
        </BrowserRouter>
    )

}
