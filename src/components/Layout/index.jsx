import React from 'react'
import { useState } from 'react'
import { ImStack } from 'react-icons/im'
import { AiOutlinePlus, AiOutlineMail, AiOutlineMessage, AiOutlineHeart, AiOutlineUser, AiOutlinePoweroff, AiOutlineMenu } from 'react-icons/ai'
import { BsHouses } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

const Layout = () => {
    const [dashOpen, setDashOpen] = useState(false);
    

  return (
    <div className='bg-body-400 flex font-main'>
      <div>
        {dashOpen && (<div onClick={()=>{setDashOpen(false)}} className='h-[100%] w-[100%] z-[19] fixed bg-black bg-opacity-10 top-0 left-0'></div>)}
        <div
          className={`fixed top-0 left-0 z-[20] hidden md:block md:w-1/4 xl:w-1/5 sm:w-3/4 h-[100vh] bg-cblue-900
             `}
        >
          {/* Navigation menu content */}
          <div className="flex justify-between items-center h-20 px-4 border-b">
            <h1 className="text-2xl text-cred-500">Home</h1>
          </div>
          <div className="bg-cblue-900 hover:cursor-pointer">
            <div>
              <h3 className='text-body-500 my-6 ml-4 text-lg'>Main</h3>
              <ul>
                <li className='text-body-400 py-3 pl-4 font-thin hover:border-l-2 hover:border-cred-500 hover:bg-cblue-1000 hover:text-body-300 flex gap-2 items-center'><ImStack/> Dashboard</li>
                <li className='text-body-400 py-3 pl-4 font-thin hover:border-l-2 hover:border-cred-500 hover:bg-cblue-1000 hover:text-body-300 flex gap-2 items-center'><AiOutlinePlus/> Create Listing</li>
                <li className='text-body-400 py-3 pl-4 font-thin hover:border-l-2 hover:border-cred-500 hover:bg-cblue-1000 hover:text-body-300 flex gap-2 items-center'><AiOutlineMail/> Message</li>
              </ul>
            </div>
            <div>
              <h3 className='text-body-500 my-6 ml-4 text-lg'>Manage Listings</h3>
              <ul>
                <li className='text-body-400 py-3 pl-4 font-thin hover:border-l-2 hover:border-cred-500 hover:bg-cblue-1000 hover:text-body-300 flex gap-2 items-center'><BsHouses/> My Properties</li>
                <li className='text-body-400 py-3 pl-4 font-thin hover:border-l-2 hover:border-cred-500 hover:bg-cblue-1000 hover:text-body-300 flex gap-2 items-center'><AiOutlineMessage/> Reviews</li>
                <li className='text-body-400 py-3 pl-4 font-thin hover:border-l-2 hover:border-cred-500 hover:bg-cblue-1000 hover:text-body-300 flex gap-2 items-center'><AiOutlineHeart/> My Favourites</li>
              </ul>
            </div>
            <div>
              <h3 className='text-body-500 my-6 ml-4 text-lg'>Manage Account</h3>
              <ul>
                <li className='text-body-400 py-3 pl-4 font-thin hover:border-l-2 hover:border-cred-500 hover:bg-cblue-1000 hover:text-body-300 flex gap-2 items-center'><AiOutlineUser/> My Profile</li>
                <li className='text-body-400 py-3 pl-4 font-thin hover:border-l-2 hover:border-cred-500 hover:bg-cblue-1000 hover:text-body-300 flex gap-2 items-center'><AiOutlinePoweroff/> Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <Navbar color="body-800" bg="body-400"/>
        <div className='w-full md:w-[75%] xl:w-[80%] flex justify-center'>
            <div onClick={() => setDashOpen(!dashOpen)} className='md:hidden p-4 bg-body-300 my-8 flex gap-4 w-[80%] items-center justify-start rounded-md hover:cursor-pointer'><AiOutlineMenu/>Dashboard Navigation</div>
        </div>
        <div className='w-full md:w-[75%] xl:w-[80%] bg-body-400 md:ml-[25%] xl:ml-[20%]'>
                <Outlet/>
        </div>
      </div>

      <div
          className={`fixed top-0 left-0 z-[20] w-2/3 md:w-1/4 xl:w-1/5 sm:w-3/4 h-[100vh] bg-cblue-900 transform
          transition-transform duration-300 ${dashOpen ? "translate-x-0" : "-translate-x-full"
        } `}
        >
          {/* Navigation menu content */}
          <div className="flex justify-between items-center h-20 px-4 border-b">
            <h1 className="text-2xl text-cred-500">Home</h1>
            <MdClose
								className="text-black h-7 w-7"
								onClick={() => setDashOpen(!dashOpen)}
							/>
          </div>
          <div className="bg-cblue-900 hover:cursor-pointer">
            <div>
              <h3 className='text-body-500 my-6 ml-4 text-lg'>Main</h3>
              <ul>
                <li className='text-body-400 py-2 pl-4 font-thin hover:border-l-2 hover:border-cred-500 hover:bg-cblue-1000 hover:text-body-300 flex gap-2 items-center'><ImStack/> Dashboard</li>
                <li className='text-body-400 py-2 pl-4 font-thin hover:border-l-2 hover:border-cred-500 hover:bg-cblue-1000 hover:text-body-300 flex gap-2 items-center'><AiOutlinePlus/> Create Listing</li>
                <li className='text-body-400 py-2 pl-4 font-thin hover:border-l-2 hover:border-cred-500 hover:bg-cblue-1000 hover:text-body-300 flex gap-2 items-center'><AiOutlineMail/> Message</li>
              </ul>
            </div>
            <div>
              <h3 className='text-body-500 my-6 ml-4 text-lg'>Manage Listings</h3>
              <ul>
                <li className='text-body-400 py-2 pl-4 font-thin hover:border-l-2 hover:border-cred-500 hover:bg-cblue-1000 hover:text-body-300 flex gap-2 items-center'><BsHouses/> My Properties</li>
                <li className='text-body-400 py-2 pl-4 font-thin hover:border-l-2 hover:border-cred-500 hover:bg-cblue-1000 hover:text-body-300 flex gap-2 items-center'><AiOutlineMessage/> Reviews</li>
                <li className='text-body-400 py-2 pl-4 font-thin hover:border-l-2 hover:border-cred-500 hover:bg-cblue-1000 hover:text-body-300 flex gap-2 items-center'><AiOutlineHeart/> My Favourites</li>
              </ul>
            </div>
            <div>
              <h3 className='text-body-500 my-6 ml-4 text-lg'>Manage Account</h3>
              <ul>
                <li className='text-body-400 py-2 pl-4 font-thin hover:border-l-2 hover:border-cred-500 hover:bg-cblue-1000 hover:text-body-300 flex gap-2 items-center'><AiOutlineUser/> My Profile</li>
                <li className='text-body-400 py-2 pl-4 font-thin hover:border-l-2 hover:border-cred-500 hover:bg-cblue-1000 hover:text-body-300 flex gap-2 items-center'><AiOutlinePoweroff/> Logout</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Layout