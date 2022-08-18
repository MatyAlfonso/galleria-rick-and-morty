import { CardImg } from '../components/CardImg';

export const CharacterInfo = ({ character }) => {

    return (

        <div className='infoCharacter text-center mx-8 w-full'>
            <h2 className='text-white text-5xl pb-8'>{character.name}</h2>
            <CardImg image={character.image} name={character.name} />
            <ul className='my-8'>
                <li>
                    <p className='text-white text-2xl'>Status: {character.status}</p>
                </li>
                <li>
                    <p className='text-white text-2xl'>Species: {character.species}</p>
                </li>
                <li>
                    <p className='text-white text-2xl'>Gender: {character.gender}</p>
                </li>
                <li>
                    <p className='text-white text-2xl'>Origin: {character.origin.name}</p>
                </li>
                <li>
                    <p className='text-white text-2xl'>Location: {character.location.name}</p>
                </li>
            </ul>
        </div>
    )
}