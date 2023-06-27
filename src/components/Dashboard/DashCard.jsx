import React from 'react'



const DashCard = (props) => {

  const {
    number,
    text,
    color,
    icon
  } = props;
  return (
     <div className='bg-body-300 rounded-md flex items-center justify-between'>
        <div className='p-4 py-10 pl-10'>
          <h3 className='text-3xl font-semibold text-body-800'>{number}</h3>
          <p className='text-sm font-thin text-body-800'>{text}</p>
        </div>
        <div className='mr-10'>{icon}</div>
      </div>
  )
}

export default DashCard