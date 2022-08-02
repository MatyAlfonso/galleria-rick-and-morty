import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
    return (
        <div className="flex items-center m-10">
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block w-full px-20 py-2 text-white bg-[#2baeb8] border rounded-full focus:border-black focus:ring-[#f0ed43] focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-white"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-[#2baeb8] rounded-full">
                    <SearchIcon />
                </button>
            </div>
        </div>
    )
}
