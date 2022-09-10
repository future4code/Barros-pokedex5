import styled from "styled-components"

export const CardContainer = styled.div`

  border: 2px solid black;
  background-color: azure;
  width: 200px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const NamePokemon = styled.h2`
  margin: 10px 0;
`;

export const PokemonImage = styled.img`
  width: 100%;
  height: 250px;
`;


export const PokeCardContainer = styled.div`
  height: 35vh;
  width: 250px;
  margin: 10px;
  display: grid;
  grid-template-rows: 90% 10%;
 
`;

export const ImagemContainer = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagemPokemon = styled.img`
  height: 100%;
  width: 100%;
`;



export const backgroundCard = styled.div`
background-color: "#f1f1f1";
 
`;

