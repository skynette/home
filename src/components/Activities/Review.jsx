import React from 'react'
import { AiOutlineMessage } from 'react-icons/ai';

const Review = (props) => {
    const { user, item } = props;
    return (
        <div className='h-10 flex gap-4 items-center'>
            <div>
                <AiOutlineMessage className='h-10 w-10 bg-cred-500 text-cred-500 bg-opacity-10 p-2 rounded-full' />
            </div>

            <div>
                <p className='font-thin text-sm text-body-800'>{user} left a review on <span className='font-bold'>{item}</span></p>
            </div>
        </div>
    )
}

export default Review