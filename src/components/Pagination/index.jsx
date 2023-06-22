import React, { useState } from 'react';
import Card from '../Card';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

const Pagination = (props) => {
    
    const {data} = props;

  const itemsPerPage = 10; 
  const totalItems = data.length; 
  const totalPages = Math.ceil(totalItems / itemsPerPage); 

  const [currentPage, setCurrentPage] = useState(1); 

  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  
  const itemsToDisplay =  data.slice(startIndex, endIndex);

  return (
    <div >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
            {itemsToDisplay.map((card, j) => (
            <Card 
                key={j}
                type={card.type}
                price={card.price}
                img={card.img}
                name={card.name}
                location={card.location}
                beds={card.beds}
                baths={card.bath}
                sqft={card.sqft}
                profileimg={card.profileImg}
                profilename={card.profileName}
                date={card.date}
                mode={card.mode}
            />
            ))}
        </div>
      
      <div className='flex justify-center pb-10'>
        <div className='flex items-center'>
            <button className='p-3 rounded-full bg-body-300 mr-2 text-body-600 hover:bg-cred-500 hover:text-body-300 border border-body-500'
            disabled={currentPage === 1}
             onClick={() => handlePageChange(currentPage - 1)}
            >
            <AiFillCaretLeft/>
            </button>

       
            {Array.from({ length: totalPages }, (_, index) => (
            <button className={`h-[40px] w-[40px] rounded-full mr-2 hover:bg-cred-500 hover:text-body-300 border border-body-500 ${(currentPage===index+1)?'text-body-300 bg-cred-500':'bg-body-300 text-body-600'}`}
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
            >
                {index + 1}
            </button>
            ))}

            <button className='p-3 rounded-full bg-body-300 text-body-600 hover:bg-cred-500 hover:text-body-300 border border-body-500' 
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
         >
            <AiFillCaretRight/>
            </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
