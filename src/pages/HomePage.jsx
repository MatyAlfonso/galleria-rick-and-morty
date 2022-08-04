import { useState, useEffect } from "react";
import { Pagination, CharacterContainer, ParticleBackground } from "../components";

export const HomePage = () => {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('https://rickandmortyapi.com/api/character/');
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();
  const [pages, setPages] = useState();

  useEffect(() => {
    const url = currentPage;

    setIsLoading(true);

    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
      setIsLoading(false);
      setNextPage(data.info.next);
      setPreviousPage(data.info.prev);
      setPages(data.info.pages);
    }

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(nextPage);
  }

  const handlePreviousPage = () => {
    setCurrentPage(previousPage);
  }

  const handlePageChange = (page) => {
    setCurrentPage(`https://rickandmortyapi.com/api/character/?page=${page}`);
  }

  return (
    <>
      <ParticleBackground/>
      {isLoading
        ?
        <div>Loading...</div>
        :
        <div className='flex gap-5 flex-wrap justify-around'>
          {
            characters.map(character => {
              return (
                <CharacterContainer
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  image={character.image}
                />
              )
            })
          }
          <Pagination
            handleNextPage={nextPage ? handleNextPage : null}
            handlePreviousPage={previousPage ? handlePreviousPage : null}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            pages={pages}
          />
        </div>
      }
    </>
  )
}
