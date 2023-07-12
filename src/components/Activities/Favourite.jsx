import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

const Favourite = (props) => {
    const {item} = props;
  return (
    <div className='h-10 flex gap-4 items-center'>
            <div>
                <AiOutlineHeart className='h-10 w-10 bg-cred-500 text-cred-500 bg-opacity-10 p-2 rounded-full' />
            </div>

            <div>
                <p className='font-thin text-sm text-body-800'>Someone favourites your <span className='font-bold'>{item}</span> listing</p>
            </div>
        </div>
  )
}

export default Favourite