import { useState,useEffect } from 'react';
import { NavBar } from '../components';
import { CardImg } from '../components/CardImg';

export const InfoPage = () => {

    const [character, setCharacter] = useState([])

    useEffect ( () => {
        fetch('https://rickandmortyapi.com/api/character/1')
        .then(response => {
            return response.json()
        })
        .then(character => {
          setCharacter(character)
        });
    },[])

    
    return (
        <>
          <NavBar/>
          <div className='py-12 px-8 flex bg-gray-900 m-10 rounded-lg items-start'>
              <CardImg image={character.image}/>
              <div className='infoCharacter text-center grow mx-8'>
                  <h2>{character.name} ({character.species})</h2>
                  <ul className='text-left my-8'>
                    <li>
                      <p>Status: {character.status}</p>  
                    </li>
                    <li>
                      <p>Gender: {character.gender}</p>
                    </li>
                    <li>
                      <p>Origin: character.origin.name</p>
                    </li>
                    <li>
                      {/* <ul>
                        {character.episode.map((episode) => {
                          return <li>{episode}</li>
                        })}
                      </ul> */}
                    </li>
                  </ul>
              </div>     
          </div>
          
          <div className='items-center text-center bg-green-800'>
              <p>&copy; Copyright 2022 - Juan Estevecorena</p>
              <p>Todos los derechos reservados</p>
          </div>
        </>
    )
}

