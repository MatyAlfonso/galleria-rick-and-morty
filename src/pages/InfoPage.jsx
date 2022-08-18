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
        <div className='py-12 px-8 flex bg-[#2baeb8]/25 mb-10 rounded-lg w-3/5 self-center justify-around flex-col items-center'>
          <CharacterInfo character={character} />
        </div>
      }
    </>
  )
}