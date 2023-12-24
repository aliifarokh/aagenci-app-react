import React from 'react'
import Button1 from './Button1'

const Dev2 = ({dev2, dev2Flag}) => {
    return (
        <section ref={dev2} className={`w-full font-ali duration-[.4s] text-white my-8 py-4 px-12 md:px-16 lg:px-20 ${dev2Flag ? "" : "opacity-0 translate-y-[300px]"}`}>
            <div className={`w-full flex justify-center items-start `}>
                <div className={`flex flex-col flex-1 `}>
                    <h3 className='text-white my-4 uppercase text-[17px] font-[400] font-ali  tracking-[4px]'>CAPTIVATE YOUR CUSTOMERS</h3>
                    <h2 className='text-[50px] my-4 leading-[65px] md:text-[65px] md:leading-[65px] lg:text-[] font-extrabold lg:leading-[]'>
                    Stunning Designs <br /> <span className='text-[#d7eb6e]'>Drive Results.</span>
                    </h2>
                    <p className={`font-[300] mt-4 mb-8 text-[17px] leading-[24px] text-[#9b9b9b]`}>Our design agency offers innovative solutions that captivate customers,<br /> drive engagement and get results.</p>
                    <Button1 title={"about us"} />
                </div>
                <div className="hidden lg:flex  flex-1">
                    <p className='font-normal text-end items-start text-[#9b9b9b] text-[16px] sm:text-[18px] '>Stand out from the competition with our beautiful designs.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default Dev2