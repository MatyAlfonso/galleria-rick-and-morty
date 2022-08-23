import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ParticleBackground } from '../components';
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
      <ParticleBackground />
      {loading
        ?
        <h1>Loading...</h1>
        :
        <div className='w-11/12 md:w-3/4 xl:w-1/2 my-28 mx-2 py-12 px-8 flex bg-[#2baeb8]/25 rounded-lg self-center justify-around flex-col items-center'>
          <CharacterInfo character={character} />
        </div>
      }
    </>
  )
}