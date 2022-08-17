import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { ParticleBackground } from '../components';
import { CardImg } from '../components/CardImg';
import { CharacterInfo } from '../components/CharacterInfo';

export const InfoPage = () => {

  const { id } = useParams();

  const [character, setCharacter] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => setCharacter(data))
      .then(() => setLoading(false))
  }, [id]);

  return (
    <>
      <ParticleBackground/>
      {loading 
        ? 
        <h1>Loading...</h1> 
        :
        <>
          <div className='py-12 px-8 flex bg-[#2baeb8]/25 mb-10 rounded-lg items-start w-5/6 self-center flex-wrap justify-around'>
          <CardImg image={character.image} name={character.name} />
          <CharacterInfo character={character}/>
          </div>
        </>
      }
    </>
  )
}

