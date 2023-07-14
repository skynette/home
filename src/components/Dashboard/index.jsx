import React from 'react'
import DashCard from './DashCard'
import { AiOutlineEye, AiOutlineMessage, AiOutlineHeart, AiOutlineHome } from 'react-icons/ai'
import Graph from '../Chart'
import Approved from '../Activities/Approved'
import Favourite from '../Activities/Favourite'
import Review from '../Activities/Review'
import Copyright from '../Copyright'
const Dashboard = () => {

    const dashItems = [
        {
            number: 37,
            text: 'All Properties',
            icon: <AiOutlineHome className='h-16 w-16 text-black bg-opacity-10 bg-black p-3 rounded-full' />,
            color: 'black'
        },
        {
            number: 24,
            text: 'Total Views',
            icon: <AiOutlineEye className='h-16 w-16 bg-cblue-500 text-cblue-500 bg-opacity-10 p-3 rounded-full' />,
            color: 'cblue-500'
        },
        {
            number: 12,
            text: 'Total Visitor Reviews',
            icon: <AiOutlineMessage className='h-16 w-16 bg-cred-500 text-cred-500 bg-opacity-10 p-3 rounded-full' />,
            color: 'cred-500'
        },
        {
            number: 18,
            text: 'Total Favourites',
            icon: <AiOutlineHeart className='h-16 w-16 bg-cyellow-800 text-cyellow-800 bg-opacity-10 p-3 rounded-full' />,
            color: 'cyellow-600'
        }

    ]
    const graphData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        values: [200, 50, 220, 350, 220, 250, 400],
    };

    const activities = [
        {
            id: 'approved',
            item: 'Luxury Family Home'
        },
        {
            id: 'review',
            user: 'Kathy Brown',
            item: 'Renovated Apartment'
        },
        {
            id: 'favourite',
            item: 'Gorgeous Villa Bay'
        }
    ]



    return (
        <>
            <div className='p-4 md:p-20 md:pt-10 md:pr-4 font-main '>
                <div className='mb-6'>
                    <h2 className='text-3xl font-semibold text-body-800 md:mt-10'>Howdy, Hasan</h2>
                    <p className='text-sm font-thin text-body-800'>We are glad to see you again!</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {dashItems.map((items, i) => (
                        <DashCard
                            key={i}
                            number={items.number}
                            text={items.text}
                            color={items.color}
                            icon={items.icon}
                        />
                    ))}
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className='lg:basis-[60%] bg-body-300 mt-6 rounded-md h-[40vh] p-6 shrink'>
                        <h3 className='text-body-800 text-2xl font-semibold'>View Statistics</h3>
                        <div className='h-[90%]'>
                            <Graph data={graphData} />
                        </div>
                    </div>
                    <div className='lg:basis-[40%] bg-body-300 mt-6 flex flex-col gap-4 py-6 px-5 rounded-md shrink'>
                        <h3 className='text-body-800 text-xl font-semibold'>Recent Activities</h3>
                        {activities.map((activity, i) => {
                            if (activity.id === 'approved') {
                                return (<Approved key={i} item={activity.item} />)
                            }
                            else if (activity.id === 'review') {
                                return (<Review key={i} user={activity.user} item={activity.item} />)
                            }
                            else {
                                return (<Favourite key={i} item={activity.item} />)
                            }
                        })}
                        {activities.map((activity, i) => {
                            if (activity.id === 'approved') {
                                return (<Approved key={i+3} item={activity.item} />)
                            }
                            else if (activity.id === 'review') {
                                return (<Review key={i+3} user={activity.user} item={activity.item} />)
                            }
                            else {
                                return (<Favourite key={i+3} item={activity.item} />)
                            }
                        })}
                    </div>
                </div>
            </div>
            <Copyright />
        </>
    )
}

export default Dashboard