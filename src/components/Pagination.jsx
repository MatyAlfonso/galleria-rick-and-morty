export const Pagination = ({ handleNextPage, handlePreviousPage, handlePageChange, currentPage, pages }) => {

    let pageButtons = [];

    let currentPageNumber = currentPage.split('=')[2];

    for (let i = 1; i <= pages; i++) {
        //eslint-disable-next-line
        pageButtons.push(<button className={`m-0.5 text-xl text-white ${currentPageNumber == i ? 'underline text-[#2baeb8]' : 'none'}`} key={i} onClick={() => handlePageChange(i)}>{i}</button>);
    }

    return (
        <div className='text-center m-10'>
            {handlePreviousPage && (<button className="px-4 py-2 m-5 text-white bg-[#2baeb8] hover:bg-[#2699a1] rounded-full hover:outline-offset-2" onClick={handlePreviousPage}>Previous</button>)}
            {pageButtons}
            {handleNextPage && (<button className="px-4 py-2 m-5 text-white bg-[#2baeb8] hover:bg-[#2699a1] rounded-full hover:outline-offset-2" onClick={handleNextPage}>Next</button>)}
        </div>
    )
}
