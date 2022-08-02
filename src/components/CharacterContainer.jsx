export const CharacterContainer = ({id, name, image}) => {
    return (
        <div key={id}>
            <h1>{name}</h1>
            <img src={image} alt={name} />
        </div>
    )
}