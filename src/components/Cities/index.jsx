import React from 'react'
import { useNavigate } from 'react-router-dom';

const City = (props) => {
    const {
        city,
        num,
        image,
        colSpan
    }  = props

const navigate = useNavigate();

const handleClick = () =>{
    navigate(`/search/${city}`);
    
}

    return (
        <div  className={`h-[60vh] lg:h-[40vh] overflow-hidden lg:col-span-${colSpan} rounded-lg relative mb-2 md:mb-0`}>
            <div onClick={handleClick} className={`h-[100%] w-[100%] ${image} rounded-lg hover:transform hover:scale-110 transition-transform ease-in-out duration-500`}>

            </div>
            <div className="absolute bottom-8 text-center left-[38%]">
                <h2 className="text-body-300 text-lg font-bold">{city}</h2>
                <p className="text-body-300 font-light">{num} properties</p>
            </div>
        </div>
    )
}

export default City