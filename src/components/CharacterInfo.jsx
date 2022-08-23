import { CardImg } from '../components/CardImg';

export const CharacterInfo = ({ character }) => {

    return (

        <div className='infoCharacter text-center mx-8 w-full'>
            <h2 className='text-white text-5xl pb-8'>{character.name}</h2>
            <CardImg image={character.image} name={character.name} />
            <ul className='my-8'>
                <li>
                    <p className='text-white text-2xl'><b>Status:</b> {character.status}</p>
                </li>
                <li>
                    <p className='text-white text-2xl'><b>Species:</b> {character.species}</p>
                </li>
                <li>
                    <p className='text-white text-2xl'><b>Gender:</b> {character.gender}</p>
                </li>
                <li>
                    <p className='text-white text-2xl'><b>Origin:</b> {character.origin.name}</p>
                </li>
                <li>
                    <p className='text-white text-2xl'><b>Location:</b> {character.location.name}</p>
                </li>
            </ul>
        </div>
    )
}