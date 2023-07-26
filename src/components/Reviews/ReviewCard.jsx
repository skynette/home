import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs';

const ReviewCard = (props) => {

    const { body, date, title, image } = props;
    return (
        <div className='w-full flex py-4 gap-4'>
            <div className='overflow-hidden'>
                <img src={image} className='h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] rounded-full object-cover object-top' />
            </div>
            <div className='basis-2/3 md:basis-3/4'>
                <h3 className='text-lg font-semibold text-body-800'>Your review on <span className='text-cred-500'>{title}</span></h3>
                <h2 className='text-sm text-body-500 py-2 pb-3'>{date}</h2>
                <p className='text-sm text-body-800'>{body}</p>
                <div className='flex gap-4 mt-6'>
                    <div className='hover:cursor-pointer p-1 bg-body-400 w-8 h-8 rounded-md flex items-center justify-center'><AiOutlineEdit className='bg-body-400 w-6 h-6 text-cred-500' /></div>
                    <div className='hover:cursor-pointer p-1 bg-body-400 w-8 h-8 rounded-md flex items-center justify-center'><BsTrash className='bg-body-400 w-6 h-6 text-cred-500' /></div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard