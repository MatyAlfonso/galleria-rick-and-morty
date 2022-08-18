import { createContext, useState, useEffect } from 'react';

export const SearchContext = createContext();

export function SearchContextProvider({ children }) {

    const [query, setQuery] = useState('');
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(`https://rickandmortyapi.com/api/character/?name=${query}`);
    const [nextPage, setNextPage] = useState();
    const [previousPage, setPreviousPage] = useState();
    const [pages, setPages] = useState();

    useEffect(() => {
    
        setIsLoading(true);

        const fetchData = async () => {
            const response = await fetch(currentPage);
            const data = await response.json();
            setCharacters(data.results);
            setIsLoading(false);
            setNextPage(data.info?.next);
            setPreviousPage(data.info?.prev);
            setPages(data.info?.pages);
        }

        fetchData();

    }, [currentPage, query]);

    const handleNextPage = () => {
        setCurrentPage(nextPage);
    }

    const handlePreviousPage = () => {
        setCurrentPage(previousPage);
    }

    const handlePageChange = (page) => {
        setCurrentPage(`https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`);
    }

    return (
        <SearchContext.Provider value={{
            query,
            setQuery,
            characters,
            isLoading,
            currentPage,
            setCurrentPage,
            nextPage,
            previousPage,
            pages,
            handleNextPage,
            handlePreviousPage,
            handlePageChange
        }}>
            {children}
        </SearchContext.Provider>
    )
}

