import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <Link to="/">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png' alt='Rick and Morty logo' className='w-3/4 xl:w-1/2 m-auto h-auto px-6 py-8' />
        </Link>
    )
}
