import React from 'react'
import { counts } from '../constants'

const Counts = ({count, flag}) => {
  return (
    <section ref={count} className={`w-full flex justify-center duration-[1s] ${flag ? "" : "translate-x-[-400px] opacity-0"}`}>
      <div className={`w-full md:w-[90%]  font-ali text-white bg-[#222222] grid grid-cols-1 grid-rows-4 gap-1 ss:grid-cols-2 ss:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 rounded-[15px] py-4 px-5  my-8`}>
        {
          counts.map((item, i) => (
            <div className={`flex flex-grow justify-center items-center `} key={item.id}>
              <div className='text-[35px] ss:text-[50px] md:text-[65px] font-bold mx-2 text-[#d7eb6e]'>{item.count}</div>
              <div className={`text-[#ababab] text-[17px]`}>{item.title}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Counts;