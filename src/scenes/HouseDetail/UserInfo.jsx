import React from 'react'
import profile1 from "../../assets/featured Pages/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
import { AiTwotoneMessage, AiFillPhone } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const UserInfo = () => {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate("/profile/123");
  }


  return (
    <div className='flex gap-6 mt-6'>
        <img onClick={handleClick}  className='h-[90px] w-[90px] rounded-full object-cover object-top' src={profile1}/>
        <div className='flex flex-col gap-4'> 
            <h4 className='text-body-800 text-lg font-bold'>Samul Williams</h4>
            <div className='flex gap-6'>
                <a href="tel:+15877858144">
                   <AiFillPhone className='text-body-800 w-8 h-8'/> 
                </a>
                <AiTwotoneMessage className='text-body-800 w-8 h-8'/>
            </div>
        </div>
    </div>
  )
}

export default UserInfo