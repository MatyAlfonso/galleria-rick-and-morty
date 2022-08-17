import { useState, useEffect } from 'react';
import { CardImg } from '../components/CardImg';
import { useParams } from 'react-router-dom';

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
      {
        loading ?
          <h1>Loading...</h1>
          :
          <>
            <h1>{character.name}</h1>
            <CardImg image={character.image} name={character.name} />
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.type}</p>
          </>
      }
    </>
  )
}

