import React from 'react'
import ReviewCard from './ReviewCard'
import { AiOutlineSearch } from 'react-icons/ai'
import reviews from '../../constants/reviews'
import Copyright from '../Copyright'

const Reviews = () => {
  return (
    <>
      <div className='p-4 md:p-20 md:pt-10 md:pr-4 font-main'>
        <div className='mb-1 md:mb-6 md:flex md:items-center md:justify-between'>
          <div>
            <h3 className='text-3xl font-semibold text-body-800 md:mt-10'>My Properties</h3>
            <p className='text-sm font-thin text-body-800'>We are glad to see you again!</p>
          </div>
          <div className='relative p-6 px-0 md:basis-1/3 md:mt-10'>
            <input
              className='w-full h-12 rounded-md outline-none px-4 pr-[17%] text-body-800 border border-body-400'
              placeholder='Search'
            />
            <div className='h-12 w-[15%] rounded-e-md text-body-800 bg-white border-r border-t border-b border-body-400 absolute right-0 top-6 z-10 flex justify-center items-center search hover:border-cred-500'>
              <AiOutlineSearch className='text-body-500 h-6 w-6 searchicon' />
            </div>
          </div>
        </div>
        <div className='bg-body-300 p-6 pb-14 rounded-md'>
          <h3 className='text-body-800 font-semibold text-lg'>My Reviews</h3>
          <div className='mt-4'>
            {reviews.map((item, index) => (
              <ReviewCard key={index} body={item.content} date={item.date} image={item.img} title={item.name} />
            ))}
          </div>
        </div>
        <div className='bg-body-300 mt-6 p-6 pb-14 rounded-md'>
          <h3 className='text-body-800 font-semibold text-lg'>Visitor Reviews</h3>
          <div className='mt-4'>
            {reviews.map((item, index) => (
              <ReviewCard key={index} body={item.content} date={item.date} image={item.img} title={item.name} />
            ))}
          </div>
        </div>
      </div>
      <Copyright />
    </>
  )
}

export default Reviews