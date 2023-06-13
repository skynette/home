import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { TbArrowsLeftRight } from 'react-icons/tb'
import { CiLocationOn} from 'react-icons/ci'

const Card = (props) => {
    

    return (
        <div className='h-[54vh] w-[93%] bg-body-300 m-2 mt-14 shadow-md hover:shadow-lg transform hover:scale-[1.02] hover:transition-transform hover:duration-500 rounded-lg mb-12 flex flex-col items-center justify-center font-main'>
            <div className="m-2 h-[98%] w-[95%]">
                <div className="w-[100%] h-[45%] relative">
                    <img src={props.img} className='w-[100%] h-[100%] object-cover  rounded-lg' />
                    <h3 className='font-bold text-body-300 text-xl absolute bottom-2 left-6 z-1'>{props.price}/<span className='text-lg'>mo</span></h3>
                    <div className='flex gap-2 text-sm absolute top-1 left-6'>
                        <div className='bg-cblue-500 p-1 text-center text-body-300'>Featured</div>
                        <div className='bg-cred-500 text-center p-1 text-body-300'>For {props.mode}</div>
                    </div>
                    <div className='flex gap-1 absolute bottom-2 right-6'>
                        <div className='bg-body-800 p-2 rounded-md opacity-75 hover:opacity-100 hover:bg-cred-500'><TbArrowsLeftRight className='text-xl text-body-300'/></div>
                        <div className='bg-body-800 p-2 rounded-md opacity-75 hover:opacity-100 hover:bg-cred-500'><AiOutlineHeart className='text-xl text-body-300'/></div>
                    </div>
                </div>
                <p className='text-cred-600 text-sm pt-2 pl-2'>{props.type}</p>
                <h3 className='font-bold text-body-800 text-lg pl-2'>{props.name}</h3>
                <p className='text-sm font-light pt-2 pl-2 flex items-center text-body-800'><CiLocationOn/>{props.location}</p>
                <div className='flex pt-3 pl-2 gap-8'>
                    <p className='text-sm text-body-800'>Beds: {props.beds}</p>
                    <p className='text-sm text-body-800'>Baths: {props.baths}</p>
                    <p className='text-sm text-body-800'>SqFt: {props.sqft}</p>
                </div>
                <hr className='text-body-800 my-6'/>
                <div className='h-[15%] w-full px-2 flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <img className="h-[50px] w-[50px] object-cover object-top rounded-full" src={props.profileimg}/>
                        <p className='text-sm text-body-800 '>{props.profilename}</p>
                    </div>
                    <p className='text-sm font-light text-body-800'>{props.date}</p>
                </div>



            </div>
        </div>
    )
}
export default Card