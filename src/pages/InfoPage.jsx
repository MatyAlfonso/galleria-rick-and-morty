import { useState,useEffect } from 'react';

export const InfoPage = () => {

    const [personaje, setPersonaje] = useState([])

    useEffect ( () => {
        fetch('https://rickandmortyapi.com/api/character/2')
        .then(response => {
            return response.json()
        })
        .then(personaje => {
            setPersonaje(personaje)
        });
    },[])
    

    return (
        <>
            <div className='h-screen py-12 px-8 flex'>
                <img src={personaje.image} alt='Rick and Morty character'/>
                <div className='infoCharacter'>
                    <h2>{personaje.name}</h2>
                    
                </div>
            </div>
            <div className='items-center justify-center bg-green-800'>
                <p>&copy; Copyright 2022 - Juan Estevecorena</p>
                <p>Todos los derechos reservados</p>
            </div>
        </>
    )
}