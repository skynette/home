import React from 'react'
import RatingStars from 'react-rating-stars-component'

const ReviewCardTwo = (props) => {

    const { body, image, rating, user } = props;
    return (
        <div className='w-full flex py-4 gap-4'>
            <div className='overflow-hidden'>
                <img src={image} className='h-[100px] w-[100px] rounded-full object-cover object-top' />
            </div>
            <div className='basis-2/3 md:basis-3/4'>
                <div className='flex gap-4'>
                <h3 className='text-lg font-semibold text-body-800'>{user}</h3>
                <RatingStars
                  count={5}
                  value={rating}
                  edit={false}
                  size={15}
                  activeColor="#fadb14"
                />
                </div>
                <p className='text-sm text-body-800'>{body}</p>
            </div>
        </div>
    )
}

export default ReviewCardTwo