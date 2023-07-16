import React from 'react'
import {useState, useRef } from 'react'
import Map from '../Map'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
const Upload = () => {

  const addressRef = useRef(null);
  const countyRef = useRef(null);
  const cityRef = useRef(null);
  const neighbourhoodRef = useRef(null);
  const zipRef = useRef(null);
  const countryRef = useRef(null);
  const lat = useRef(null);
  const lon = useRef(null);

  const [longs, setLongs] = useState(0);
  const [lats, setLats] = useState(0);
  const [label, setLabel] = useState('');

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url).then(res => res.json()).then(data => {
        console.log(data.address);
        const { city, country, house_number, neighbourhood, postcode, road, state, suburb } = data.address;
        addressRef.current.value = house_number + " " + road + " " + suburb;
        setLabel(addressRef.current.value);
        countyRef.current.value = state;
        cityRef.current.value = city;
        neighbourhoodRef.current.value = neighbourhood;
        zipRef.current.value = postcode;
        countryRef.current.value = country;
        lat.current.value = latitude;
        lon.current.value = longitude;
          setLats(latitude);
          setLongs(longitude);
      }).catch(() => {
        console.log("Error fetching data from API");
      })
    })

  }


  return (
    <div className='p-4 md:p-20 md:pt-10 md:pr-4 font-main'>
      <div className='mb-6'>
        <h3 className='text-3xl font-semibold text-body-800 md:mt-10'>Add New Property</h3>
        <p className='text-sm font-thin text-body-800'>We are glad to see you again!</p>
      </div>
      <div className='bg-body-300 p-6 pb-14 rounded-md'>
        <h3 className='text-2xl font-semibold text-body-800 my-6'>Create Listing</h3>
        <label className='block text-body-800 my-2' htmlFor='title'>Property Title</label>
        <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='title' name='title' type='text' />
        <label className='block text-body-800 my-2 mt-6' htmlFor='description'>Description</label>
        <textarea id='description' name='description' className='w-full h-40 rounded-md outline-none px-4 pt-4 border border-body-400' />
        <div className='lg:flex lg:gap-6'>
          <div className='mt-6 w-full'>
            <label className='block text-body-800 my-2' htmlFor='type'>Type</label>
            <div className='relative'>
              <select id='type' name='type' className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400'>
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
              <select id='status' name='status' className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400'>
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
            <input id='price' name='price' type='text' className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' />
          </div>
          <div className='mt-6 w-full'>
            <label className='block text-body-800 my-2' htmlFor='area'>Area</label>
            <input id='area' name='area' type='text' className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' />
          </div>
          <div className='mt-6 w-full'>
            <label className='block text-body-800 my-2' htmlFor='rooms'>Rooms</label>
            <input id='rooms' name='rooms' type='number' className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' />
          </div>
        </div>
      </div>
      <div className='bg-body-300 p-6 pb-14 mt-8 rounded-md'>
        <div className='flex gap-6 my-6 items-center justify-between md:justify-start'>
          <h3 className='text-2xl font-semibold text-body-800' >Location</h3>
          <div onClick={getLocation} className='flex items-center rounded-md overflow-hidden cursor-pointer hover:opacity-75'>
            <div className='bg-cred-600 p-4 text-body-300 font-bold'><HiOutlineLocationMarker /></div>
            <div className={`text-center p-3 bg-cred-500 text-body-300 font-bold`}>Get location</div>
          </div>
        </div>
        <label className='block text-body-800 my-2' htmlFor='address'>Address</label>
        <input ref={addressRef} className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='address' name='address' type='text' />
        <div className='lg:flex lg:gap-6'>
          <div className='mt-6 w-full'>
            <label className='block text-body-800 my-2' htmlFor='county'>County / State</label>
            <input ref={countyRef} className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='county' name='county' type='text' />
          </div>
          <div className='mt-6 w-full'>
            <label className='block text-body-800 my-2' htmlFor='city'>City</label>
            <input ref={cityRef} className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='city' name='city' type='text' />
          </div>
        </div>
        <div className='lg:flex lg:gap-6'>
          <div className='mt-6 w-full'>
            <label className='block text-body-800 my-2' htmlFor='latitude'>Latitude <span className="text-sm">(optional)</span></label>
            <input ref={lat} className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='latitude' name='latitude' type='text' />
          </div>
          <div className='mt-6 w-full'>
            <label className='block text-body-800 my-2' htmlFor='longitude'>Longitude <span className="text-sm">(optional)</span></label>
            <input ref={lon} className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='longitude' name='longitude' type='text' />
          </div>
        </div>
        <div className='lg:flex lg:gap-4'>
          <div className='mt-6 w-full'>
            <label className='block text-body-800 my-2' htmlFor='neighbourhood'>Neighbourhood</label>
            <input ref={neighbourhoodRef} id='neighbourhood' name='neighbourhood' type='text' className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' />
          </div>
          <div className='mt-6 w-full'>
            <label className='block text-body-800 my-2' htmlFor='zip'>Zip</label>
            <input ref={zipRef} id='zip' name='zip' type='text' className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' />
          </div>
          <div className='mt-6 w-full'>
            <label className='block text-body-800 my-2' htmlFor='country'>Country</label>
            <input ref={countryRef} id='country' name='country' type='text' className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' />
          </div>
        </div>
        <div className='mt-10 rounded-md overflow-hidden'>
          <Map latitude={lats} longitude={longs} info={label} />
        </div>
      </div>

    </div>
  )
}

export default Upload