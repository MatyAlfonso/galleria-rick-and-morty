import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {

    const { query, setQuery, setCurrentPage } = useContext(SearchContext);

    const handleSearchBarChange = (e) => {
        const { value } = e.target;
        setQuery(value);
        setCurrentPage(`https://rickandmortyapi.com/api/character/?name=${query}`);
    }

    const handleSearchBarSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form
            className="flex items-center p-4 md:p-0 md:m-10 w-full xl:w-1/2 2xl:w-1/2 2xl:m-auto 2xl:block"
            onSubmit={(e) => handleSearchBarSubmit(e)}
        >
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block text-lg w-full px-20 py-2 text-white bg-[#2baeb8] border rounded-full focus:border-black focus:ring-[#f0ed43] focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-white"
                    placeholder="Search..."
                    onChange={(e) => handleSearchBarChange(e)}
                    value={query}
                />
                <button className="px-4 text-white bg-[#2baeb8] rounded-full hover:outline-offset-2">
                    <SearchIcon />
                </button>
            </div>
        </form>
    )
}
