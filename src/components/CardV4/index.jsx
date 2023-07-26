import React from 'react'
import { CiLocationOn } from 'react-icons/ci'

const CardV4 = (props) => {
    const { mode, img, name, price, location} = props;

    return (
        <div className='flex gap-6 w-[100%]'>
            <div className='relative w-[33.3333%]'>
                <img src={img} className='h-[15vh] w-full object-center object-cover rounded-md' />
                <div className='p-1 rounded-sm text-body-300 bg-cred-500 absolute left-4 top-6 text-sm'>For {mode}</div>
            </div>
            <div className='w-[40%]'>
                <h3 className='font-bold text-body-800 text-lg'>{name}</h3>
                <div className="text-sm font-light pt-1 pl-2 flex items-center text-body-800">
                    <div className='pb-2'>
                    <CiLocationOn className='inline'/>
                    {location}
                    </div>
                </div>
                <h3 className="font-semibold text-cred-500 text-md">
                    {price}/<span className="text-sm">mo</span></h3>
            </div>
        </div>
    )
}

export default CardV4