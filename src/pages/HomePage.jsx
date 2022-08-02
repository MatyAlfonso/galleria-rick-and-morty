import { useState, useEffect } from "react";
import { CharacterContainer } from "../components/CharacterContainer";

export const HomePage = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then(data => setCharacters(data.results))
  }, [])

  return (
    <div className='flex gap-5 flex-wrap justify-around'>
      {
        characters.map(character => {
          return (
            <CharacterContainer id={character.id} name={character.name} image={character.image} />
          )
        })
      }
    </div>
  )
}
