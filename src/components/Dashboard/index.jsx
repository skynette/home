import React from 'react'

const Dashboard = () => {
  return (
    <div className='p-4 md:p-10 md:pr-4'>
        <div className='mb-6'>
           <h2 className='text-3xl font-semibold text-body-800'>Howdy, Hasan</h2> 
           <p className='text-sm font-thin text-body-800'>We are glad to see you again!</p>
        </div>
        <div className='grid sm:col-span-1 md:col-span-2 lg:col-span-4 gap-6'>
            <div className='bg-body-300'>
                <div>
                    <h3></h3>
                </div>
            </div>
            <div className='bg-body-300'></div>
            <div className='bg-body-300'></div>
            <div className='bg-body-300'></div>
        </div>

    </div>
  )
}

export default Dashboard