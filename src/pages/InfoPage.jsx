import { useState, useEffect } from 'react';
import { CardImg } from '../components/CardImg';
import { CharacterInfo } from '../components/CharacterInfo';

export const InfoPage = () => {

  const [character, setCharacter] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1')
      .then(response => {
        return response.json()
      })
      .then(character => {
        setCharacter(character)
        setLoading(false)
      });
  },[])

  return (
    <>
      <div className='py-12 
                        px-8 
                        flex 
                        bg-gray-900 
                        mb-10 
                        rounded-lg 
                        items-start 
                        w-5/6 
                        self-center 
                        flex-wrap 
                        justify-around'>
        <CardImg image={character.image} />
        <CharacterInfo character={character}/>
      </div>
    </>
  )
}

