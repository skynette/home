import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'

const Approved = (props) => {
    const {item} = props;
    return (
        <div className='h-10 flex gap-4 items-center'>
            <div>
                <AiOutlineHome className='h-10 w-10 bg-cred-500 text-cred-500 bg-opacity-10 p-2 rounded-full' />
            </div>

            <div>
                <p className='font-thin text-sm text-body-800'>Your listing <span className='font-bold'>{item}</span> has been approved!</p>
            </div>
        </div>
    )
}

export default Approved