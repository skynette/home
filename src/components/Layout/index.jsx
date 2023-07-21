import { useState } from 'react'
import { ImStack } from 'react-icons/im'
import { AiOutlinePlus, AiOutlineMail, AiOutlineMessage, AiOutlineHeart, AiOutlineUser, AiOutlinePoweroff, AiOutlineMenu } from 'react-icons/ai'
import { BsHouses } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'

const Layout = () => {
    const [dashOpen, setDashOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const directory = location.pathname.slice(1);

    // Common classnames
    const baseContainerClass = 'w-full md:w-[75%] xl:w-[80%]';
    const mainNavClass = 'bg-cblue-900 hover:cursor-pointer';
    const listItemClass = 'py-3 pl-4 font-thin hover:border-l-2 hover:border-cred-500 hover:bg-cblue-1000 hover:text-body-300 flex gap-2 items-center';

    return (
        <div className='bg-body-400 flex font-main'>
            <div>
                {dashOpen && (<div onClick={() => { setDashOpen(false) }} className='h-[100%] w-[100%] z-[19] fixed bg-body-800 bg-opacity-10 top-0 left-0'></div>)}
                <div
                    className={`fixed top-0 left-0 z-[20] hidden md:block md:w-1/4 xl:w-1/5 sm:w-3/4 h-[100vh] bg-cblue-900`}
                >
                    {/* Navigation menu content */}
                    <div className="flex justify-between items-center h-20 px-4 border-b">
                        <h1 onClick={() => { navigate("/") }} className="text-2xl text-cred-500">Home</h1>
                    </div>
                    <div className={mainNavClass}>
                        <div>
                            <h3 className='text-body-500 my-6 ml-4 text-lg'>Main</h3>
                            <ul>
                                <li onClick={() => { navigate("/dashboard") }} className={`${(directory === 'dashboard') ? "border-l-2 border-cred-500 bg-cblue-1000 text-body-300" : "text-body-400"} ${listItemClass}`}><ImStack /> Dashboard</li>
                                <li onClick={() => { navigate("/listing/create") }} className={`${(directory === 'listing/create') ? "border-l-2 border-cred-500 bg-cblue-1000 text-body-300" : "text-body-400"} ${listItemClass}`}><AiOutlinePlus /> Create Listing</li>
                                <li onClick={() => { navigate("/message") }} className={`${(directory === 'message') ? "border-l-2 border-cred-500 bg-cblue-1000 text-body-300" : "text-body-400"} ${listItemClass}`}><AiOutlineMail /> Message</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-body-500 my-6 ml-4 text-lg'>Manage Listings</h3>
                            <ul>
                                <li onClick={() => { navigate("/properties") }} className={`${(directory === 'properties') ? "border-l-2 border-cred-500 bg-cblue-1000 text-body-300" : "text-body-400"} ${listItemClass}`}><BsHouses /> My Properties</li>
                                <li onClick={() => { navigate("/reviews") }} className={`${(directory === 'reviews') ? "border-l-2 border-cred-500 bg-cblue-1000 text-body-300" : "text-body-400"} ${listItemClass}`}><AiOutlineMessage /> Reviews</li>
                                <li onClick={() => { navigate("/favourites") }} className={`${(directory === 'favourites') ? "border-l-2 border-cred-500 bg-cblue-1000 text-body-300" : "text-body-400"} ${listItemClass}`}><AiOutlineHeart /> My Favourites</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-body-500 my-6 ml-4 text-lg'>Manage Account</h3>
                            <ul>
                                <li onClick={() => { navigate("/user") }} className={`${(directory === 'user') ? "border-l-2 border-cred-500 bg-cblue-1000 text-body-300" : "text-body-400"} ${listItemClass}`}><AiOutlineUser /> My Profile</li>
                                <li className={`text-body-400 ${listItemClass}`}><AiOutlinePoweroff /> Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <Navbar color="body-300" bg="cblue-1000" />
                <div className={baseContainerClass + ' flex justify-center'}>
                    <div onClick={() => setDashOpen(!dashOpen)} className='md:hidden p-4 bg-body-300 my-8 flex gap-4 w-[80%] items-center justify-start rounded-md hover:cursor-pointer'><AiOutlineMenu />Dashboard Navigation</div>
                </div>
                <div className={baseContainerClass + ' bg-body-400 md:ml-[25%] xl:ml-[20%]'}>
                    <Outlet />
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 z-[20] w-2/3 md:w-1/4 xl:w-1/5 sm:w-3/4 h-[100vh] bg-cblue-900 transform
          transition-transform duration-300 ${dashOpen ? "translate-x-0" : "-translate-x-full"
                    } `}
            >
                {/* Navigation menu content */}
                <div className="flex justify-between items-center h-20 px-4 border-b">
                    <h1 onClick={() => { navigate("/") }} className="text-2xl text-cred-500">Home</h1>
                    <MdClose
                        className="text-black h-7 w-7"
                        onClick={() => setDashOpen(!dashOpen)}
                    />
                </div>
                <div className={mainNavClass}>
                    <div>
                        <h3 className='text-body-500 my-6 ml-4 text-lg'>Main</h3>
                        <ul>
                            <li onClick={() => { navigate("/dashboard"); setDashOpen(false) }} className={`${(directory === 'dashboard') ? "border-l-2 border-cred-500 bg-cblue-1000 text-body-300" : "text-body-400"} ${listItemClass}`}><ImStack /> Dashboard</li>
                            <li onClick={() => { navigate("/listing/create"); setDashOpen(false) }} className={`${(directory === 'listing/create') ? "border-l-2 border-cred-500 bg-cblue-1000 text-body-300" : "text-body-400"} ${listItemClass}`}><AiOutlinePlus /> Create Listing</li>
                            <li onClick={() => { navigate("/message"); setDashOpen(false) }} className={`${(directory === 'message') ? "border-l-2 border-cred-500 bg-cblue-1000 text-body-300" : "text-body-400"} ${listItemClass}`}><AiOutlineMail /> Message</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-body-500 my-6 ml-4 text-lg'>Manage Listings</h3>
                        <ul>
                            <li onClick={() => { navigate("/properties"); setDashOpen(false) }} className={`${(directory === 'properties') ? "border-l-2 border-cred-500 bg-cblue-1000 text-body-300" : "text-body-400"} ${listItemClass}`}><BsHouses /> My Properties</li>
                            <li onClick={() => { navigate("/reviews"); setDashOpen(false) }} className={`${(directory === 'reviews') ? "border-l-2 border-cred-500 bg-cblue-1000 text-body-300" : "text-body-400"} ${listItemClass}`}><AiOutlineMessage /> Reviews</li>
                            <li onClick={() => { navigate("/favourites"); setDashOpen(false) }} className={`${(directory === 'favourites') ? "border-l-2 border-cred-500 bg-cblue-1000 text-body-300" : "text-body-400"} ${listItemClass}`}><AiOutlineHeart /> My Favourites</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-body-500 my-6 ml-4 text-lg'>Manage Account</h3>
                        <ul>
                            <li onClick={() => { navigate("/user"); setDashOpen(false) }} className={`${(directory === 'user') ? "border-l-2 border-cred-500 bg-cblue-1000 text-body-300" : "text-body-400"} ${listItemClass}`}><AiOutlineUser /> My Profile</li>
                            <li className={`text-body-400 ${listItemClass}`}><AiOutlinePoweroff /> Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;
