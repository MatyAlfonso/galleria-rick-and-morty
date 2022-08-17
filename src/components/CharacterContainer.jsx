export const CharacterContainer = ({ id, name, image }) => {
    return (
        <div className="bg-[#2baeb8]/25 p-2 rounded-lg" key={id}>
            <img src={image} alt={name} className='rounded-lg'/>
            <h1 className='my-4 text-center text-white text-2xl'>{name}</h1>
        </div>
    )
}