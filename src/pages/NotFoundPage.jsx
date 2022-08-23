import { Link } from 'react-router-dom';
import { PortalGif, ParticleBackground } from "../components";


export const NotFoundPage = () => {
    return (
        <>
            <ParticleBackground />
            <div className='flex flex-col m-auto'>
                <div>
                    <h1 className="text-center font-bold text-4xl md:text-6xl xl:text-8xl mb-6 text-white">Dimension C-404</h1>
                    <PortalGif width={'500px'} height={'auto'}/>
                    <h2 className="text-center m-10 font-bold text-2xl text-white xl:text-4xl">“What are you here for? Just kidding, I don’t care.” — Rick</h2>
                    <Link to="/">
                        <button className='bg-[#2baeb8] text-2xl rounded-lg py-3 px-6 text-white block m-auto hover:bg-[#2699a1] xl:text-4xl xl:py-6 xl:px-12'>Go back to home</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

