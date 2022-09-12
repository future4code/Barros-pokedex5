import styled from "styled-components"

export const CardContainer = styled.div`
 
  background-color: azure;
  width: 200px;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  box-shadow: 5px 5px 5px yellowgreen;
`;

export const NamePokemon = styled.h3`
  margin: 10px 0;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif, Geneva, Tahoma, sans-serif, 'Times New Roman', Times, serif
`;

export const ImagemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagemPokemon = styled.img`
  height: 100px;
  width: 100px;
`;

export const backgroundCard = styled.div`
background-color: "#f1f1f1";
`;

export const ButtonAddRemoveContainer = styled.div`
  display: grid;
  padding-bottom: 30px;
  height: 50%;
  width: 70%;
`;


