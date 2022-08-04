import React from 'react'

export const Pagination = ({ handleNextPage, handlePreviousPage, handlePageChange, pages }) => {

    let pageButtons = [];

    for (let i = 1; i <= pages; i++) {
        pageButtons.push(<button className='text-lg m-0.5 hover:underline font-medium' key={i} onClick={() => handlePageChange(i)}>{i}</button>);
    }

    return (
        <div>
            {handlePreviousPage && (<button className="px-4 py-2 m-5 text-white bg-[#2baeb8] hover:bg-[#2699a1] rounded-full hover:outline-offset-2" onClick={handlePreviousPage}>Previous</button>)}
            {pageButtons}
            {handleNextPage && (<button className="px-4 py-2 m-5 text-white bg-[#2baeb8] hover:bg-[#2699a1] rounded-full hover:outline-offset-2" onClick={handleNextPage}>Next</button>)}
        </div>
    )
}
