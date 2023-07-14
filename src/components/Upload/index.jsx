import React from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'

const Upload = () => {
  return (
    <div className='p-4 md:p-20 md:pt-10 md:pr-4 font-main'>
      <div className='mb-6'>
        <h3 className='text-3xl font-semibold text-body-800 md:mt-10'>Add New Property</h3>
        <p className='text-sm font-thin text-body-800'>We are glad to see you again!</p>
      </div>
      <div className='bg-body-300 p-6 pb-14 rounded-md'>
        <h3 className='text-2xl font-semibold text-body-800 my-6'>Create Listing</h3>
        <label className='block text-body-800 my-2' htmlFor='title'>Property Title</label>
        <input className='w-full h-12 rounded-md outline-none px-4 text-body-800' id='title' name='title' type='text' />
        <label className='block text-body-800 my-2 mt-6' htmlFor='description'>Description</label>
        <textarea id='description' name='description' className='w-full h-40 rounded-md outline-none px-4 pt-4' />
        <div className='lg:flex lg:gap-6'>
          <div className='mt-6 w-full'>
            <label className='block text-body-800 my-2' htmlFor='type'>Type</label>
            <div className='relative'>
              <select id='type' name='type' className='w-full h-12 rounded-md outline-none px-4 text-body-800'>
                <option value="Type1">Type1</option>
                <option value="Type2">Type2</option>
                <option value="Type3">Type3</option>
                <option value="Type4">Type4</option>
                <option value="Type5">Type5</option>
              </select>
              <AiOutlineCaretDown className='absolute right-4 top-[40%] text-body-600' />
            </div>
          </div>
          <div className='mt-6 w-full'>
            <label className='block text-body-800 my-2' htmlFor='status'>Status</label>
            <div className='relative'>
              <select id='status' name='status' className='w-full h-12 rounded-md outline-none px-4 text-body-800 '>
                <option value="Status1">Status1</option>
                <option value="Status2">Status2</option>
                <option value="Status3">Status3</option>
                <option value="Status4">Status4</option>
                <option value="Status5">Status5</option>
              </select>
              <AiOutlineCaretDown className='absolute right-4 top-[40%] text-body-600' />
            </div>
          </div>
        </div>
        <div className='lg:flex lg:gap-4'>
          <div className='mt-6 w-full'>
            <label className='block text-body-800 my-2' htmlFor='price'>Price</label>
            <input id='price' type='text' className='w-full h-12 rounded-md outline-none px-4 text-body-800'/>
          </div>
          <div className='mt-6 w-full'>
            <label className='block text-body-800 my-2' htmlFor='area'>Area</label>
            <input id='area' type='text' className='w-full h-12 rounded-md outline-none px-4 text-body-800'/>
          </div>
          <div className='mt-6 w-full'>
            <label className='block text-body-800 my-2' htmlFor='rooms'>Rooms</label>
            <input id='rooms' type='number' className='w-full h-12 rounded-md outline-none px-4 text-body-800'/>
          </div>
        </div>
      </div>
      <div className='bg-body-300 p-6 pb-14 mt-8 rounded-md'>

      </div>
    </div>
  )
}

export default Upload