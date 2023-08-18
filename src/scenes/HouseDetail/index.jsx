import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar'
import Map from '../../components/Map'
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai"
import { TbArrowsLeftRight } from "react-icons/tb"
import { IoIosSchool } from 'react-icons/io'
import { BsFillHeartPulseFill, BsFillBusFrontFill } from 'react-icons/bs'
import RatingStars from 'react-rating-stars-component'
import reviewsT from '../../constants/reviewsDetails'
import ReviewCardTwo from '../../components/Reviews/ReviewCardTwo'
import UserInfo from './UserInfo'
import CardV3 from '../../components/CardV3'
import CarouselVT from '../../components/CarouselVT'
import cardGroup from '../../constants/cards'
import Footer from '../../components/Footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../../assets/featured Pages/vu-anh-TiVPTYCG_3E-unsplash.jpg"
import Image2 from "../../assets/featured Pages/todd-kent-178j8tJrNlc-unsplash.jpg"
import Image3 from "../../assets/featured Pages/spacejoy-XpbtQfr9Skg-unsplash.jpg"
import Image4 from "../../assets/featured Pages/spacejoy-uGWNcejbf2E-unsplash.jpg"
import Image5 from "../../assets/featured Pages/sieuwert-otterloo-aren8nutd1Q-unsplash.jpg"
import Image6 from "../../assets/featured Pages/sidekix-media-wRzBarqn3hs-unsplash.jpg";
import Image7 from "../../assets/featured Pages/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg";
import Image8 from "../../assets/featured Pages/r-architecture-2gDwlIim3Uw-unsplash.jpg";
import Image9 from "../../assets/featured Pages/kara-eads-L7EwHkq1B2s-unsplash.jpg";
import Image10 from "../../assets/featured Pages/greg-rivers-rChFUMwAe7E-unsplash.jpg";
import Image11 from "../../assets/featured Pages/fomstock-4ojhpgKpS68-unsplash.jpg";
import Image12 from "../../assets/featured Pages/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg";




const HouseDetail = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [stars, setStars] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const v3Items = cardGroup.slice(0, 3);

  const ratingChanged = (newRating) => {
    setStars(newRating);

  };

  const handleClick = (number) => {
    setModalOpen(true);
    setSlideIndex(number);

  };

  const handleCarClick = (e) =>{
    e.stopPropagation();

  }
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto';   // Enable scrolling
    }

    return () => {
      document.body.style.overflow = 'auto';   // Re-enable scrolling when component unmounts
    };
  }, [modalOpen]);


  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: slideIndex
  };

  return (<>
    <div className='bg-body-300'>
      {modalOpen && (<div className='fixed w-[100vw] z-20 h-[100vh] bg-body-800 bg-opacity-90 flex flex-cols justify-center items-center' onClick={() => setModalOpen(false)}>
        <div className='w-[100vw] h-[100vh] p-4 py-20 md:p-10 md:pb-20 xl:px-40 font-main flex flex-col items-center justify-center'>
          <div className={`w-full md:w-2/3  aspect-[16/10] bg-body-300`} onClick={handleCarClick}>
            <Slider {...settings}>
              <img className='w-full aspect-[16/10] object-cover object-center' src={Image3} />
              <img className='w-full aspect-[16/10] object-cover object-center' src={Image4} />
              <img className='w-full aspect-[16/10] object-cover object-center' src={Image5} />
              <img className='w-full aspect-[16/10] object-cover object-center' src={Image6} />
              <img className='w-full aspect-[16/10] object-cover object-center' src={Image7} />
              <img className='w-full aspect-[16/10] object-cover object-center' src={Image8} />
              <img className='w-full aspect-[16/10] object-cover object-center' src={Image9} />
            </Slider>

          </div>
        </div>
      </div>
      )}
      <Navbar color="body-300" bg="cblue-1000" />
      <div className='p-4 py-20 md:p-10 md:pb-20 xl:px-40 md:pr-4 font-main'>
        <div className='lg:flex lg:justify-between lg:items-center'>
          <div className='mb-6 basis-2/3'>
            <h3 className='text-3xl font-semibold text-body-800 md:mt-10 mb-2'>Gorgeous Villa Bay View</h3>
            <p className='text-sm font-thin text-body-800'>1421 San Pedro St, Los Angeles CA 900015</p>
          </div>
          <div className='flex justify-between gap-4 basis-1/3 mb-6'>
            <h3 className='text-3xl font-semibold text-body-800'>$11000<span className='text-xl font-normal'>/mo</span></h3>
            <div className='flex gap-2'>
              <div className='p-2 cursor-pointer rounded-md'>
                <TbArrowsLeftRight className='h-4 w-4 text-body-800' />
              </div>
              <div className='p-2 cursor-pointer rounded-md'>
                <AiOutlineHeart className='h-4 w-4 text-body-800' />
              </div>
              <div className='p-2 cursor-pointer rounded-md'>
                <AiOutlineShareAlt className='h-4 w-4 text-body-800' />
              </div>

            </div>
          </div>
        </div>
        <div className='md:flex md:gap-6'>
          <div className='basis-2/3 w-full aspect-[16/10] mb-4'>
            <img onClick={() => { handleClick(0) }} className='w-full h-full object-cover object-center rounded-md' src={Image3} />
          </div>
          <div className='basis-1/3 grid grid-cols-2 gap-6'>
            <img onClick={() => { handleClick(1) }} className='w-full h-[17vh] object-cover object-center rounded-md' src={Image4} />
            <img onClick={() => { handleClick(2) }} className='w-full h-[17vh] object-cover object-center rounded-md' src={Image5} />
            <img onClick={() => { handleClick(3) }} className='w-full h-[17vh] object-cover object-center rounded-md' src={Image6} />
            <img onClick={() => { handleClick(4) }} className='w-full h-[17vh] object-cover object-center rounded-md' src={Image7} />
            <img onClick={() => { handleClick(5) }} className='w-full h-[17vh] object-cover object-center rounded-md' src={Image8} />
            <img onClick={() => { handleClick(6) }} className='w-full h-[17vh] object-cover object-center rounded-md' src={Image9} />
          </div>
        </div>

      </div>
      <div className='bg-body-400'>
        <div className='p-4 py-20 md:p-10 md:pb-20 xl:px-40 md:pr-4 lg:grid lg:grid-cols-3 lg:gap-6 font-main'>
          <div className='col-span-2'>
            <div className={`bg-body-300 rounded-md border-body-500 p-8 relative transition-[max-height] ease-in-out duration-500 ${!accordionOpen ? 'max-h-[30rem] overflow-hidden' : 'max-h-[200rem] overflow-hidden'}`}>
              <div className='flex gap-2'>
                <div className='w-full bg-body-400 flex justify-center p-2 rounded-md'>
                  <h4 className='text-body-800 text-sm'>Apartment</h4>
                </div>
                <div className='w-full bg-body-400 flex justify-center p-2 rounded-md'>
                  <h4 className='text-body-800 text-sm'>Beds: 4</h4>
                </div>
                <div className='w-full bg-body-400 flex justify-center p-2 rounded-md'>
                  <h4 className='text-body-800 text-sm'>Baths: 2</h4>
                </div>
                <div className='w-full bg-body-400 flex justify-center p-2 rounded-md'>
                  <h4 className='text-body-800 text-sm'>Sq Ft: 5280</h4>
                </div>
              </div>
              <h3 className='text-body-800 text-xl font-bold mt-6' >Description</h3>
              <p className='text-body-800 my-6 text-sm'>Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.</p>
              <p className='text-body-800 my-6 text-sm'>Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.</p>
              <p className='text-body-800 my-6 text-sm'>Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.</p>
              <p className='text-body-800 my-6 mb-10 text-sm'>Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.</p>
              {!accordionOpen && <div className='absolute bottom-16 z-10 h-56 w-full bg-gradient-to-t from-body-300 to-transparent'>
              </div>}
              <div onClick={() => { setAccordionOpen(!accordionOpen) }} className='h-16 w-full bg-body-300 absolute left-0 bottom-0 flex items-center pl-6 rounded-md cursor-pointer'>
                <h3 className='text-cred-500 text-sm'>{accordionOpen ? 'Show less ▲' : 'Show more ▼'}</h3>
              </div>

            </div>
            <div className='bg-body-300 p-8 rounded-md mt-[1px] border-body-500'>
              <h3 className='text-body-800 text-xl font-bold' >Property Details</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-6'>
                <h4 className='text-body-800 text-sm mb-6'>Property ID :<span className='font-bold'> HZ27</span></h4>
                <h4 className='text-body-800 text-sm mb-6'>Price :<span className='font-bold'> $130000</span></h4>
                <h4 className='text-body-800 text-sm mb-6'>Property Size :<span className='font-bold'> 1560 Sq Ft</span></h4>
                <h4 className='text-body-800 text-sm mb-6'>Year Built :<span className='font-bold'> 2016-01-09</span></h4>
                <h4 className='text-body-800 text-sm mb-6'>Bedrooms :<span className='font-bold'> 8</span></h4>
                <h4 className='text-body-800 text-sm mb-6'>Bathrooms :<span className='font-bold'> 4</span></h4>
                <h4 className='text-body-800 text-sm mb-6'>Garage :<span className='font-bold'> 2</span></h4>
                <h4 className='text-body-800 text-sm mb-6'>Garage Size :<span className='font-bold'> 200 SqFt</span></h4>
                <h4 className='text-body-800 text-sm mb-6'>Property Type :<span className='font-bold'> Apartment</span></h4>
                <h4 className='text-body-800 text-sm mb-6'>Property Status :<span className='font-bold'> For Sale</span></h4>
              </div>
            </div>
            <div className='bg-body-300 p-8 rounded-md mt-8 border-body-500'>
              <h3 className='text-body-800 text-xl font-bold' >Features</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-6'>
                <h4 className='text-body-800 text-sm mb-6'><span className='text-cred-500'>&#x2713;</span> Air Conditioning</h4>
                <h4 className='text-body-800 text-sm mb-6'><span className='text-cred-500'>&#x2713;</span> Barbeque</h4>
                <h4 className='text-body-800 text-sm mb-6'><span className='text-cred-500'>&#x2713;</span> Dryer</h4>
                <h4 className='text-body-800 text-sm mb-6'><span className='text-cred-500'>&#x2713;</span> Gym</h4>
                <h4 className='text-body-800 text-sm mb-6'><span className='text-cred-500'>&#x2713;</span> Laundry</h4>
                <h4 className='text-body-800 text-sm mb-6'><span className='text-cred-500'>&#x2713;</span> Lawn</h4>
                <h4 className='text-body-800 text-sm mb-6'><span className='text-cred-500'>&#x2713;</span> Microwave</h4>
                <h4 className='text-body-800 text-sm mb-6'><span className='text-cred-500'>&#x2713;</span> Outdoor Shower</h4>
                <h4 className='text-body-800 text-sm mb-6'><span className='text-cred-500'>&#x2713;</span> Refrigerator</h4>
                <h4 className='text-body-800 text-sm mb-6'><span className='text-cred-500'>&#x2713;</span> Sauna</h4>
                <h4 className='text-body-800 text-sm mb-6'><span className='text-cred-500'>&#x2713;</span> Swimming Pool</h4>
                <h4 className='text-body-800 text-sm mb-6'><span className='text-cred-500'>&#x2713;</span> TV Cable</h4>
                <h4 className='text-body-800 text-sm mb-6'><span className='text-cred-500'>&#x2713;</span> Washer</h4>
                <h4 className='text-body-800 text-sm mb-6'><span className='text-cred-500'>&#x2713;</span> WiFi</h4>
                <h4 className='text-body-800 text-sm mb-6'><span className='text-cred-500'>&#x2713;</span> Window Coverings</h4>
              </div>
            </div>
            <div className='bg-body-300 p-8 rounded-md mt-8 border-body-500'>
              <div className='flex justify-between items-center'>
                <h3 className='text-body-800 text-xl font-bold'>Location</h3>
                <h3 className='text-body-800 text-sm'>1421 San Pedro St, Los Angeles, CA 90015</h3>
              </div>
              <div className='mt-10 rounded-md overflow-hidden'>
                <Map latitude={0} longitude={0} info={''} />
              </div>
            </div>
            <div className='bg-body-300 p-8 rounded-md mt-8 border-body-500'>
              <h3 className='text-body-800 text-xl font-bold'>Floor plans</h3>
              <div className='flex flex-col gap-4 mt-10 p-4'>
                <img className='w-full aspect-video rounded-md object-cover object-center' src={Image10} />
                <img className='w-full aspect-video rounded-md object-cover object-center' src={Image11} />
                <img className='w-full aspect-video rounded-md object-cover object-center' src={Image12} />
              </div>
            </div>
            <div className='bg-body-300 p-8 rounded-md mt-8 border-body-500'>
              <h3 className='text-body-800 text-xl font-bold'>Property video</h3>
              <div className='mt-10'>
                <iframe className='w-full aspect-video rounded-md' src="https://www.youtube.com/embed/quJzdnXuNDc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              </div>
            </div>
            <div className='bg-body-300 p-8 rounded-md mt-8 border-body-500'>
              <h3 className='text-body-800 text-xl font-bold'>What's Nearby</h3>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4 my-4'>
                  <IoIosSchool className='w-6 h-6 text-cblue-500' />
                  <h3 className='text-body-800 text-lg font-bold'>Education</h3>
                </div>
                <h4 className='text-body-800 text-sm'>Eladia&apos;s Kids (3.13 miles)</h4>
                <h4 className='text-body-800 text-sm'>Gear Up With ACLS (4.66 miles)</h4>
                <h4 className='text-body-800 text-sm'>Brooklyn Brainery (3.31 miles)</h4>

              </div>
              <div className='flex flex-col gap-4 mt-4'>
                <div className='flex items-center gap-4 my-4'>
                  <BsFillHeartPulseFill className='w-6 h-6 text-cred-500' />
                  <h3 className='text-body-800 text-lg font-bold'>Medical</h3>
                </div>
                <h4 className='text-body-800 text-sm'>Eladia&apos;s Kids (3.13 miles)</h4>
                <h4 className='text-body-800 text-sm'>Gear Up With ACLS (4.66 miles)</h4>
                <h4 className='text-body-800 text-sm'>Brooklyn Brainery (3.31 miles)</h4>

              </div>
              <div className='flex flex-col gap-4 mt-4'>
                <div className='flex items-center gap-4 my-4'>
                  <BsFillBusFrontFill className='w-6 h-6 text-cyellow-800' />
                  <h3 className='text-body-800 text-lg font-bold'>Medical</h3>
                </div>
                <h4 className='text-body-800 text-sm'>Eladia&apos;s Kids (3.13 miles)</h4>
                <h4 className='text-body-800 text-sm'>Gear Up With ACLS (4.66 miles)</h4>
                <h4 className='text-body-800 text-sm'>Brooklyn Brainery (3.31 miles)</h4>

              </div>
            </div>
            <div className='bg-body-300 p-8 rounded-md mt-8 border-body-500'>
              <div className='flex gap-4 items-center'>
                <h3 className='text-body-800 text-xl font-bold'>896 Reviews</h3>
                <RatingStars
                  count={5}
                  value={4}
                  edit={false}
                  size={15}
                  activeColor="#fadb14"
                />
              </div>
              <div>
                {reviewsT.map((items, index) => (
                  <ReviewCardTwo key={index} body={items.content} image={items.img} user={items.user} rating={items.rating} />
                ))}
              </div>
            </div>
            <div className='bg-body-300 p-8 rounded-md mt-[1px] border-body-500'>
              <h3 className='text-body-800 text-lg font-bold'>Write a Review</h3>
              <form>
                <div className='flex gap-6 my-6'>
                  <RatingStars
                    count={5}
                    value={stars}
                    onChange={ratingChanged}
                    size={15}
                    activeColor="#fadb14"
                  />
                  <h4 className='text-body-800 text-sm'>Your Rating & Review</h4>

                </div>
                <textarea name='reviews' placeholder='Your Review' className='w-full h-40 rounded-md outline-none px-4 pt-4 border border-body-400' />
                <div className='mt-4'>
                  <button className='py-3 px-10 text-body-300 bg-cred-500 border border-cred-500 hover:bg-body-300 hover:text-cred-500 rounded-md' type='submit'>Submit Review</button>
                </div>
              </form>
            </div>

          </div>
          <div className='col-span-1'>
            <div className='bg-body-300 p-8 rounded-md mt-6 lg:mt-0 border-body-500'>
              <h3 className='text-body-800 text-lg font-bold'>Listed By</h3>
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
  </>
  )
}

export default HouseDetail