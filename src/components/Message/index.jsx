import React from 'react'
import { useState, useEffect } from 'react'
import { AiOutlineSearch, AiOutlineSend } from 'react-icons/ai'
import Copyright from '../Copyright'
const Message = () => {
    const [findUser, setFindUser] = useState('');
    const searchResults = [];

    useEffect(() => {

    }, [findUser])

    return (
        <>
        <div className='p-4 md:p-20 md:pt-10 md:pr-4 font-main'>
            <div className='mb-6'>
                <h3 className='text-3xl font-semibold text-body-800 md:mt-10'>Message</h3>
                <p className='text-sm font-thin text-body-800'>We are glad to see you again!</p>
            </div>
            <div className='flex flex-col gap-6 lg:flex-row'>
                <div className='h-[80vh] lg:basis-1/3 flex flex-col gap-6 bg-body-300 rounded-md overflow-hidden'>
                    <div className='relative p-6'>
                        <input
                            className='w-full h-12 rounded-md outline-none px-4 pr-[17%] text-body-800 border border-body-400'
                            placeholder='Search'
                            value={findUser}
                            onChange={(e) => {
                                setFindUser(e.target.value)
                            }}
                        />
                        <div className='h-12 w-[15%] rounded-e-md text-body-800 bg-white border-r border-t border-b border-body-400 absolute right-6 top-6 z-10 flex justify-center items-center search hover:border-cred-500'>
                            <AiOutlineSearch className='text-body-500 h-6 w-6 searchicon' />
                        </div>
                        <div className={`w-full ${searchResults.length != 0 ? 'py-6 border' : 'py-0'} flex flex-cols absolute bg-body-300 rounded-md border-body-400`}>
                            {/* put Message Card */}
                        </div>
                    </div>
                    <div className='h-full w-full overflow-y-scroll'>
                        {/*load chats here*/}
                    </div>
                </div>
                <div className='lg:basis-2/3 h-[80vh] flex flex-col bg-body-300 rounded-md'>
                    <div className='h-full w-full bg-body-300 rounded-md overflow-y-scroll'>
                        {/* put messages here*/}
                    </div>
                    <div className='relative px-6'>
                        <input
                            className='w-full h-14 bg-body-400 text-body-800 rounded-md outline-none px-4 pr-20 m-2'
                            placeholder='Enter text here...'
                        />
                        <div className='absolute top-2 right-6 h-14 w-[10%] flex justify-center items-center senddiv'>
                            <AiOutlineSend className='text-body-500 h-6 w-6 send'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Copyright />
        </>
    )
}

export default Message