import { useContext } from "react";
import { Link } from 'react-router-dom';
import { SearchContext } from "../context/SearchContext";
import { Pagination, CharacterContainer, ParticleBackground, PortalGif } from "../components";

export const HomePage = () => {

  const {
    characters,
    isLoading,
    currentPage,
    nextPage,
    previousPage,
    pages,
    handleNextPage,
    handlePreviousPage,
    handlePageChange
  } = useContext(SearchContext);

  return (
    <>
      <ParticleBackground />
      {
        isLoading
          ? (
            <PortalGif width={'300px'} height={'auto'} />
          ) : (<>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3'>
              {
                characters?.map(character => {
                  return (
                    <Link to={`/info/${character.id}`} key={character.id}>
                      <CharacterContainer
                        id={character.id}
                        name={character.name}
                        image={character.image}
                      />
                    </Link>
                  )
                })
              }
            </div>
            <div className='m-auto'>
              {
                characters === undefined || characters.length === 0
                  ? (
                    <>
                    <h2 className='text-white text-5xl text-center'>No character found in this dimension! </h2>
                    <p className='text-white text-3xl text-center mt-4'>Try with another name...</p>
                    </>
                  )
                  : (
                    <Pagination
                      handleNextPage={nextPage ? handleNextPage : null}
                      handlePreviousPage={previousPage ? handlePreviousPage : null}
                      handlePageChange={handlePageChange}
                      currentPage={currentPage}
                      pages={pages}
                    />
                  )
              }
            </div>
          </>
          )
      }
    </>
  )
}
