import React from 'react'
import { useState, useEffect } from 'react'
import cardGroup from '../../constants/cards'
import CardV4 from '../CardV4'
import { AiOutlineEdit, AiFillCaretLeft, AiFillCaretRight, AiOutlineSearch } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import Copyright from '../Copyright'




const Properties = () => {
  const data = cardGroup;

  const itemsPerPage = 4;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [page, setPage] = useState(1);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page])

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;


  const itemsToDisplay = data.slice(startIndex, endIndex);


  return (
    <>
      <div className='p-4 md:p-20 md:pt-10 md:pr-4 font-main'>
        <div className='mb-6 md:flex md:items-center md:justify-between'>
          <div>
          <h3 className='text-3xl font-semibold text-body-800 md:mt-10'>My Properties</h3>
          <p className='text-sm font-thin text-body-800'>We are glad to see you again!</p>
          </div>
          <div className='relative p-6 pr-0 md:basis-1/3 md:mt-10'>
            <input
              className='w-full h-12 rounded-md outline-none px-4 pr-[17%] text-body-800 border border-body-400'
              placeholder='Search'
            />
            <div className='h-12 w-[15%] rounded-e-md text-body-800 bg-white border-r border-t border-b border-body-400 absolute right-0 top-6 z-10 flex justify-center items-center search hover:border-cred-500'>
              <AiOutlineSearch className='text-body-500 h-6 w-6 searchicon' />
            </div>
          </div>
        </div>
          <div className='bg-body-300'>
            <div className='w-full overflow-x-auto rounded-md'>
              <table className='w-[1055px] min-h-[90vh]'>
                <tr className='bg-cblue-1000'>
                  <th className='py-6 pl-4 text-left text-body-300 w-[40%] md:w-[50%]'>Listing Title</th>
                  <th className='text-body-300'>Date Published</th>
                  <th className='text-body-300'>Status</th>
                  <th className='text-body-300'>View</th>
                  <th className='text-body-300'>Action</th>
                </tr>
                {itemsToDisplay.map((card, j) => (
                  <tr>
                    <td>
                      <div className='py-6 pl-4'>
                        <CardV4
                          key={j}
                          price={card.price}
                          img={card.img}
                          name={card.name}
                          location={card.location}
                          mode={card.mode}
                        />
                      </div>
                    </td>
                    <td>
                      <div className='flex justify-center items-center'>
                        <p>30 December, 2020</p>
                      </div>
                    </td>
                    <td>
                      <div className='flex justify-center items-center'>
                        <div className='p-1 text-body-300 bg-cred-500 rounded-md text-sm w-16'>Pending</div>
                      </div>
                    </td>
                    <td >
                      <div className='flex justify-center items-center'>
                        <p>2,345</p>
                      </div>
                    </td>
                    <td>
                      <div className='flex justify-center items-center'>
                        <div className='flex flex-col gap-1'>
                          <div className='hover:cursor-pointer p-1 bg-body-400 w-8 h-8 rounded-md flex items-center justify-center'><AiOutlineEdit className='bg-body-400 w-6 h-6 text-cred-500' /></div>
                          <div className='hover:cursor-pointer p-1 bg-body-400 w-8 h-8 rounded-md flex items-center justify-center'><BsTrash className='bg-body-400 w-6 h-6 text-cred-500' /></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
          <div className='flex justify-center pt-10'>
            <div className='flex items-center'>
              <button className='p-3 rounded-full bg-body-300 mr-2 text-body-600 hover:bg-cred-500 hover:text-body-300 border border-body-500'
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
              >
                <AiFillCaretLeft />
              </button>


              {Array.from({ length: totalPages }, (_, index) => (
                <button className={`h-[40px] w-[40px] rounded-full mr-2 hover:bg-cred-500 hover:text-body-300 border border-body-500 ${(page === index + 1) ? 'text-body-300 bg-cred-500' : 'bg-body-300 text-body-600'}`}
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  disabled={page === index + 1}
                >
                  {index + 1}
                </button>
              ))}

              <button className='p-3 rounded-full bg-body-300 text-body-600 hover:bg-cred-500 hover:text-body-300 border border-body-500'
                disabled={page === totalPages}
                onClick={() => handlePageChange(page + 1)}
              >
                <AiFillCaretRight />
              </button>
            </div>
          </div>
        </div>
        <Copyright />
      </>
      )
}

      export default Properties