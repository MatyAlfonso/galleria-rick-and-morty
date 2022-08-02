import { useState,useEffect } from 'react';

const InfoPages = () => {

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
            <div className="flex justify-between h-36 items-center bg-green-800">
                <h1>Rick and morty</h1>
                <p>Buscador</p>
            </div>
            <div className='h-screen py-12 px-8 flex'>
                <img src={personaje.image}/>
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

export default InfoPages