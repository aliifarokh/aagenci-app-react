import React from 'react'
import Button1 from './Button1'

const Card = ({pic, title}) => {
  return (
    <div className='rounded-[16px] flex-col ss:flex-row items-center  flex w-full my-6 p-5 bg-[#222222]'>

      <div className='flex justify-center  items-center  px-3'>
        <figure className='w-[60px] h-[60px] flex justify-center items-center bg-black rounded-full'>
          <img className='w-[38px] h-[38px]' src={pic} alt="" />
        </figure>
      </div>

      <div className='flex flex-col items-center ss:items-start'>
        <h4 className='text-[14px] tracking-[4px] uppercase mt-4 ss:mt-0'>{title}</h4>
        <p className='py-3 text-[18px] text-center text-[#9b9b9b]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Button1 title={`learn more`} />
      </div>
    </div>
  )
}

export default Card