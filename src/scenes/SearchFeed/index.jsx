import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar2 from '../../components/Navbar2'
import { BiFilter } from 'react-icons/bi'
import Pagination from '../../components/Pagination'
import cardGroup from '../../constants/cards'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { AiOutlineCaretDown, AiOutlineSearch, } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const SearchFeed = () => {
  const [visible, setVisible] = useState(true);
  const [priceVal, setPriceVal] = useState([5000, 100000]);
  const [priceOpen, setPriceOpen] = useState(false);

  const { searchTerm } = useParams();
  useEffect(() => {
    function update() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 415) {
        setVisible(false)
      }
      else {
        setVisible(true)
      }
    }

    update();
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('resize', update);
    }
  }, [])

  const handleRangeChange = (value) => {
    setPriceVal(value);
  }


  return (
    <div className='bg-body-400 font-main'>
      <Navbar2 />
      <div className='pt-10 mx-8 lg:mx-32 flex justify-between items-center pb-10'>
        <h1 className='text-3xl text-body-800'>{searchTerm}-Properties</h1>
        <div className='flex items-center rounded-md overflow-hidden lg:hidden cursor-pointer'>
          <div className='bg-cred-600 p-4 text-body-300 font-bold'><BiFilter /></div>
          <div className={`text-center p-3 bg-cred-500 text-body-300 font-bold ${!visible ? 'hidden' : 'block'}`}>Show filter</div>
        </div>
      </div>

      <div className='mx-8 lg:mx-32 lg:grid lg:grid-cols-3 lg:gap-8'>
        <div className='col-span-1 hidden lg:flex lg:flex-col lg:gap-4'>
          <div className='bg-body-300 p-8 flex flex-col gap-6 rounded-md w-full'>
            <div className='relative'>
              <input className='h-12 border border-body-600 rounded-md pl-4 text-sm outline-none w-full' type="text" placeholder='Keyword' />
              <AiOutlineSearch className='absolute right-4 top-[40%] text-body-600'/>
            </div>
            <div className='relative'>
              <input className='h-12 border border-body-600 rounded-md pl-4 text-sm outline-none w-full' type="text" placeholder='Location' />
              <HiOutlineLocationMarker className='absolute right-4 top-[40%] text-body-600'/>
            </div>
            <div className='relative'>
              <select className='h-12 border border-body-600 rounded-md pl-4 text-sm outline-none text-body-500 w-full'>
                <option value="Apartment Type">Apartment Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Condo">Condo</option>
                <option value="House">House</option>
                <option value="Land">Land</option>
                <option value="Single Family">Single Family</option>
              </select>
              <AiOutlineCaretDown className='absolute right-4 top-[40%] text-body-600'/>
            </div>
            <div className='relative'>
              <div className='h-12 border border-body-600 rounded-md pl-4 text-sm flex items-center bg-white text-body-500'>Price Range</div>
              <div className={`px-20 py-10 shadow-lg z-10 absolute top-9 bg-body-300 rounded-md  border border-body-600 ${(!priceOpen)?'hidden':'block'}`}>
                <div className='flex justify-between mb-5'>
                  <h3 className='text-body-800'>${priceVal[0]}</h3>
                  <h3 className='text-body-800'>${priceVal[1]}</h3>
                </div>
                <Range
                  min={0}
                  max={100000}
                  value={priceVal}
                  onChange={handleRangeChange}
                  defaultValue={[10000, 20000]}
                  className='w-44'
                />
              </div>
              <AiOutlineCaretDown className='absolute right-4 top-[40%] text-body-600'/>
            </div>
            <div className='relative'>
              <select className='h-12 border border-body-600 rounded-md pl-4 text-sm outline-none text-body-500 w-full'>
                <option value="Bathrooms">Bathrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <AiOutlineCaretDown className='absolute right-4 top-[40%] text-body-600'/>
            </div>
            <div className='relative'>
              <select className='h-12 border border-body-600 rounded-md pl-4 text-sm outline-none text-body-500 w-full'>
                <option value="Bedrooms">Bedrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <AiOutlineCaretDown className='absolute right-4 top-[40%] text-body-600'/>
            </div>
            <div className='relative'>
              <select className='h-12 border border-body-600 rounded-md pl-4 text-sm outline-none text-body-500 w-full'>
                <option value="Garages">Garages</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Other">Other</option>
              </select>
              <AiOutlineCaretDown className='absolute right-4 top-[40%] text-body-600'/>
            </div>
            <div className='relative'>
              <select className='h-12 border border-body-600 rounded-md pl-4 text-sm outline-none text-body-500 w-full'>
                <option value="Year Built">Year Built</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
              </select>
              <AiOutlineCaretDown className='absolute right-4 top-[40%] text-body-600'/>
            </div>
            <div className='flex gap-4'>
              <input className='h-12 border border-body-600 rounded-md pl-4 text-sm outline-none w-1/2' type='text' placeholder='Min Area'/>
              <input className='h-12 border border-body-600 rounded-md pl-4 text-sm outline-none w-1/2' type='text' placeholder='Min Area'/>
            </div>
            <button className='w-full p-4 bg-cred-500 text-body-300 rounded-md hover:border hover:border-cred-500 hover:bg-body-300 hover:text-cred-500'>Clear Filters</button>

          </div>
        </div>
        <div className='col-span-2'>
          <div className='bg-body-300 text-center lg:flex lg:justify-between  lg:px-10 py-6 rounded-md border border-body-500 mb-6'>
            <h3 className='text-sm'>10 search results</h3>
            <div className='flex gap-4 justify-center'>
              <label htmlFor='age' className='border-r border-body-500 pr-4'>Status: <select className='border border-body-600 rounded-md p-1 outline-none' name='age' id='age'>
                <option value="All Status">All Status</option>
                <option value="Old">Old</option>
                <option value="Recent">Recent</option>
              </select></label>
              <label htmlFor='rentorbuy'>Sort By: <select className='border border-body-600 rounded-md p-1 outline-none' name='rentorbuy' id='rentorbuy'>
                <option value="Featured All">Featured All</option>
                <option value="Sale">Sale</option>
                <option value="Rent">Rent</option>
              </select></label>
            </div>
          </div>
          <div>
            <Pagination data={cardGroup} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchFeed