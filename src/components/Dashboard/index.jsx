import React from 'react'
import DashCard from './DashCard'
import { BsHouses } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineMessage, AiOutlineHeart, AiOutlineHome } from 'react-icons/ai'

const Dashboard = () => {

    const dashItems = [
        {
            number: 37,
            text: 'All Properties',
            icon: <AiOutlineHome className='h-16 w-16 text-black bg-opacity-10 bg-black p-3 rounded-full'/>,
            color: 'black' 
        },
        {
            number: 24,
            text: 'Total Views',
            icon: <AiOutlineEye className='h-16 w-16 bg-cblue-500 text-cblue-500 bg-opacity-10 p-3 rounded-full'/>,
            color: 'cblue-500'
        },
        {
            number: 12,
            text: 'Total Visitor Reviews',
            icon: <AiOutlineMessage className='h-16 w-16 bg-cred-500 text-cred-500 bg-opacity-10 p-3 rounded-full'/>,
            color: 'cred-500'
        },
        {
            number: 18,
            text: 'Total Favourites',
            icon: <AiOutlineHeart className='h-16 w-16 bg-cyellow-800 text-cyellow-800 bg-opacity-10 p-3 rounded-full'/>,
            color: 'cyellow-600'
        }

    ]
    





  return (
    <div className='p-4 md:p-10 md:pr-4'>
        <div className='mb-6'>
           <h2 className='text-3xl font-semibold text-body-800'>Howdy, Hasan</h2> 
           <p className='text-sm font-thin text-body-800'>We are glad to see you again!</p>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {dashItems.map((items, i)=>(
                <DashCard
                    key={i}
                    number={items.number}
                    text={items.text}
                    color={items.color}
                    icon={items.icon}
                />
            ))}
        </div>

    </div>
  )
}

export default Dashboard