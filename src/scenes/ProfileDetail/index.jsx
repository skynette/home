import React from 'react'
import Navbar from '../../components/Navbar'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import Pagination from '../../components/Pagination'
import cardGroup from '../../constants/cards'
import UserInfo from '../HouseDetail/UserInfo'
import CarouselVT from '../../components/CarouselVT'
import CardV3 from '../../components/CardV3'
import Footer from '../../components/Footer'

import profile1 from "../../assets/featured Pages/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"



const ProfileDetail = () => {

  const v3Items = cardGroup.slice(0, 3);

  return (
    <div className='bg-body-400 font-main'>
      <Navbar color="body-300" bg="cblue-1000" />
      <div className='p-4 py-20 md:p-10 md:pb-20 xl:px-40 md:pr-4 font-main'>
        <h3 className='text-3xl font-semibold text-body-800 md:mt-10 mb-8'>Agent Profile</h3>
        <div className='lg:grid lg:grid-cols-3 lg:gap-6'>
          <div className='lg:col-span-2'>
            <div className='md:flex md:gap-4 w-full p-2 bg-body-300 rounded-md'>
              <div className='md:basis-1/3 '>
                <div className='relative'>
                  <img src={profile1} className='w-full aspect-[16/12] rounded-md object-cover object-top' />
                  <div className="bg-cred-500 text-center rounded-sm p-1 text-body-300 absolute top-4 left-4">
                    12 listings
                  </div>
                </div>
              </div>
              <div className='md:basis-1/3 p-2'>
                <h4 className='text-body-800 text-lg font-bold my-2'>Christopher Pakulla</h4>
                <h4 className='text-cred-500 mb-2'>Agent</h4>
                <h4 className='text-body-800 mb-1 text-sm'>Company: 134 456 3210</h4>
                <h4 className='text-body-800 mb-1 text-sm'>Email: pakulla@findhouse.com</h4>
                <div className='flex gap-2'>
                  <AiOutlineFacebook className="text-body-500 hover:text-body-400" />
                  <AiOutlineInstagram className="text-body-500 hover:text-body-400" />
                  <AiOutlineTwitter className="text-body-500 hover:text-body-400" />
                  <BsPinterest className="text-body-500 hover:text-body-400" />
                </div>
              </div>
            </div>
            <div className='bg-body-300 rounded-md mt-10'>
              <div className='pl-4 pt-4'>
                <h3 className='text-2xl font-semibold text-body-800 '>Listings</h3>
              </div>
              <Pagination data={cardGroup} />

            </div>
          </div>
          <div className='lg:col-span-1'>
            <div className='bg-body-300 p-8 rounded-md mt-6 lg:mt-0 border-body-500'>
              <UserInfo />
            </div>
            <div className='bg-body-300 rounded-md pb-10 mt-6'>
              <h3 className='text-lg text-body-800 pt-6 pl-6 font-bold'>Featured Properties</h3>
              <div className='flex justify-center'>
                <CarouselVT />
              </div>
            </div>
            <div className='bg-body-300 py-6 rounded-lg mb-20 mt-6'>
              <h3 className='text-lg text-body-800 pb-4 pl-6 font-bold'>Recently Viewed</h3>
              <div className='flex flex-col gap-4 items-center'>
                <CardV3
                  name={v3Items[0].name}
                  img={v3Items[0].img}
                  price={v3Items[0].price}
                  beds={v3Items[0].beds}
                  baths={v3Items[0].bath}
                  sqft={v3Items[0].sqft}
                />
                <CardV3
                  name={v3Items[1].name}
                  img={v3Items[1].img}
                  price={v3Items[1].price}
                  beds={v3Items[1].beds}
                  baths={v3Items[1].bath}
                  sqft={v3Items[1].sqft}
                />
                <CardV3
                  name={v3Items[2].name}
                  img={v3Items[2].img}
                  price={v3Items[2].price}
                  beds={v3Items[2].beds}
                  baths={v3Items[2].bath}
                  sqft={v3Items[2].sqft}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProfileDetail