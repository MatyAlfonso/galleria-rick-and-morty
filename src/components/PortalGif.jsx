import portalGif from '../assets/portal-gun-rick-and-morty.gif';

export const PortalGif = ({width, height}) => {
  return (
    <img className='m-auto' src={portalGif} width={width} height={height} alt='Rick and Morty Portal GIF' />
  )
}
