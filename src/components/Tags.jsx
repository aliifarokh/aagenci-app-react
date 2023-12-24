import React from 'react'

const Tags = ({content}) => {
  return (
    <div className='w-fit me-4 mt-4 mb-2'>
        <p className='bg-[#222222] border-[2px] border-[#4d4d4d] p-[5px] w-fit uppercase rounded-[5px] text-[14px] font-medium tracking-[5px]'>{content}</p>
    </div>
  )
}

export default Tags