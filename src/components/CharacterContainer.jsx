export const CharacterContainer = ({id, name, image}) => {
    return (
        <div className='' key={id}>
            <img src={image} alt={name} />
            <h1 className='my-4 text-center'>{name}</h1>
        </div>
    )
}