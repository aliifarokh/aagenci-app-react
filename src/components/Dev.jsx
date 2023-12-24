import React from 'react'
import Button1 from './Button1'

const Dev = ({dev, devFlag}) => {
    return (
        <section ref={dev} className={`w-full font-ali text-white my-8 py-4 duration-[1s] ${devFlag ? "" : "translate-y-[400px] opacity-0"}`}>
            <div className={`w-full flex justify-center items-start `}>
                <div className="hidden lg:flex  flex-1">
                    <p className='font-normal items-start text-[#9b9b9b] text-[16px] sm:text-[18px] '>Stand out from the competition <br /> with our beautiful designs.
                    </p>
 
                </div>
                <div className={`flex flex-col flex-1 `}>
                    <h3 className='text-white my-4 uppercase text-[17px] font-[400] font-ali tracking-[4px]'>DESIGN + DEVELOPMENT</h3>
                    <h2 className='ss:text-[50px] text-[30px] my-4 ss:leading-[65px] md:text-[65px] md:leading-[65px] lg:text-[] font-extrabold lg:leading-[]'>
                    Transforming<br className='lg:block hidden'/> With <br /> <span className='text-[#d7eb6e]'>Creative Design.</span>
                    </h2>
                    <p className={`font-[300] mt-4 mb-8 text-[17px] leading-[24px] text-[#9b9b9b]`}>Our design agency offers innovative solutions that captivate customers,<br /> drive engagement and get results.</p>
                    <Button1 title={"about us"} />
                </div>
            </div>
        </section>
    )
}

export default Dev