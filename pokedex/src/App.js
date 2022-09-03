<<<<<<< HEAD
import React from 'react';
import axios from 'axios';
import "./App.css";


const app=() => {
  

  return (
    <h1>Pokedex - V0</h1>
    
  );
};

export default app;
=======
import React, { useEffect } from "react";
import Router from './Components/Router';

function App() {
  useEffect(() => {
    document.title = "POKEDEX"
  })
  return (
    <Router/>
    
  )
}
export default App;
>>>>>>> master
