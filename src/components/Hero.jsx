import React, { useEffect, useRef, useState } from 'react' 
import { heropic1, heropic2 } from '../assets'

const Hero = () => {

    return (
 
        <section className={`w-full py-16 px-8 md:px-10 text-white font-ali`}>
            <h2 className='text-white uppercase text-[15px] font-medium font-ali tracking-[3px]'>design agency</h2>
            <div className='flex  flex-col lg:flex-row relative z-[8]'>
                <div className='w-full  '>
                    <h1 className='text-[30px] xs:text-[45px] ss:text-[60px] relative z-[7] py-6 lg:py-16 leading-[60px] md:text-[90px] md:leading-[90px] lg:text-[120px] font-extrabold lg:leading-[110px]'>
                        SPECIALIZING <br />IN DESIGN<span className='text-[#d7eb6e]'>+ DEVELOPMENT</span>
                    </h1> 
                    <p className='font-normal text-[#9b9b9b] text-[17px] sm:text-[18px] sm:leading-[30.8px]'>Beautiful design has the power to captivate audiences and drive <br className='hidden sm:block' /> business growth. AAGENCI specializes in creating stunning <br className='hidden sm:block' /> designs that transform businesses worldwide.
                    </p>

                    <img className='w-[360px] h-[270px] lg:flex hidden absolute animate-dp1 top-[45%] right-[0%] rotate-[20deg] rounded-[20px] z-[5]' src={heropic2} alt="" />
                    <img className='w-[360px] h-[270px] lg:flex hidden absolute animate-dp2 top-[10%] right-[5%] rotate-[13deg] rounded-[20px] z-[4]' src={heropic1} alt="" />

                </div>
                <div className={`w-full min-h-[400px] relative  flex lg:hidden`}>
                    <img className='md:w-[360px] md:h-[270px] w-[260px] h-[200px] animate-dp1 absolute top-[20%] right-[5%] rotate-[20deg] rounded-[20px] z-[5]' src={heropic2} alt="" />
                    <img className='md:w-[360px] md:h-[270px] w-[260px] h-[200px] animate-dp2 absolute top-[20%] left-[5%] rotate-[13deg] rounded-[20px] z-[4]' src={heropic1} alt="" />
                </div>
            </div>
        </section>


    )
}

export default Hero