import { useState, useEffect } from "react";
import {CharacterContainer} from "../components/CharacterContainer";

export const HomePage = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
   fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(data => setCharacters(data.results))
  }, [])

  console.log(characters);

  return (
    <>
      {
         characters.map(character => {
          return (
            <CharacterContainer id={character.id} name={character.name} image={character.image}/>
          )
        }) 
      }
    </>
  )
}
