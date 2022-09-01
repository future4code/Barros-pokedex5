import React, { useEffect } from 'react';
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