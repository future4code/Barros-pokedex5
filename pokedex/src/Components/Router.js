import React from "react";
import Home from "./Home"
import Pokedex from "./Pokedex"
import DetalhesPokemon from "./DetalhePokemon"


function Router () {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={ <Home/>} />
            <Route path="/pokedex" element={ <Pokedex/>} />
            <Route path="/detalhes-pokemon" element={ <DetalhesPokemon/>} />
        </Routes>
        </BrowserRouter>
    )
       
}
export default Router;