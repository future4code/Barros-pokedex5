
import DetailsPokemon from './Pages/DetailsPokemon/DetailsPokemon'
import ListPokemon from './Pages/ListPokemon/ListPokemon'
import { Pokedex } from './Pages/Pokedex/Pokedex'
import { BrowserRouter, Routes } from 'react-router-dom'



import React from "react";
import {Router }from "./routes/Router";
import StateGlobal from "./Context/StateGlobal";

export default function App() {
  return (
    <StateGlobal>
      <Router />
    </StateGlobal>
  );
}








//------------------------------------

/*

import React, {Component} from 'react';
import { CardList } from './CardList/CardList';
     import styled from './CardList/CardComponent'


import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      pokemons: [],
      search:''
    };
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    .then(response => response.json())
    .then(name => this.setState({pokemons:name.results}));
  }

  handleChange=(e) => {
    this.setState({search: e.target.value});
  };

  render(){

    const {pokemons, search } = this.state;
    const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));

    return(
      <div className="App">
        <h4><a href="https://www.linkedin.com/in/surojit-manna" target="_blank" noreferrer>Author</a></h4>
        <h1>Pokemon Database</h1>
        <SearchBox
          placeholder='Search Pokemon' 
          handleChange= {this.handleChange}
        />
        <NavigationBtn/>
        <CardList pokemons={fileteredPokemons}></CardList>

      </div>
    );
  }
}

export default App;

*/

// -----------------------------------------------

/*

import React, { useEffect, useState } from "react";
import api from "./services/api";


export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("pokemon")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
   
    <div className="App">
      <p> {user?.name}</p>
      <p> {user?.url}</p>
    </div>
    
  );
}
*/