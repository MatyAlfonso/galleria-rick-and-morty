export const CharacterContainer = ({ id, name, image }) => {
    return (
        <div className="bg-[#2baeb8]/25 rounded-lg p-6 m-6" key={id}>
            <img src={image} alt={name} className='rounded-lg m-auto'/>
            <h1 className='my-4 text-center text-white text-2xl'>{name}</h1>
        </div>
    )
}