import React from 'react'
import { useNavigate } from 'react-router-dom';

const CardV3 = (props) => {
    const {
        price,
        img,
        name,
        beds,
        baths,
        sqft,
    } = props;


    const navigate = useNavigate();

	const handleClick = () =>{
		navigate("/house/123");
	}

    return (
        <div onClick={handleClick} className='flex w-[80%] gap-3'>
            <img className="w-[30%] h-[10vh] object-center object-cover rounded-md" src={img} />
            <div>
                <h3 className='font-semibold text-body-800 text-lg'>{name}</h3>
                <h3 className="font-semibold text-cred-500 text-lg">
                    {price}/<span className="text-md">mo</span>
                </h3>
                <div className='flex justify-between'>
                    <p className='text-sm text-body-800'>Beds: {beds}</p>
                    <p className='text-sm text-body-800'>Baths: {baths}</p>
                    <p className='text-sm text-body-800'>Sqft: {sqft}</p>
                </div>
            </div>
        </div>
    )
}

export default CardV3