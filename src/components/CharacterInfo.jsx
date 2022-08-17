export const CharacterInfo = ({character}) => {

    return (
        
        <div className='infoCharacter text-center grow mx-8'>
            <h2 className='text-white text-5xl'>{character.name} ({character.status})</h2>
            <ul className='text-left my-8'>
                <li>
                    <p className='text-white text-2xl'>Status: {character.species}</p>
                </li>
                <li>
                    <p className='text-white text-2xl'>Gender: {character.gender}</p>
                </li>
                <li>
                    <p className='text-white text-2xl'>Origin: {character.origin.name}</p>
                </li>
                <li>
                    {
                        <ul>
                            {character.episode.map((episode) => {
                                return <li>{episode}</li>
                            })}
                        </ul> 
                    }
                </li>
            </ul>
        </div>
        )
    }