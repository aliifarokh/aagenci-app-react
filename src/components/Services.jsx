import React from 'react'
import Card from './Card'
import { cards } from '../constants'


const Services = ({service, serviceFlag}) => {
    return (
        <section ref={service} className={`w-full flex flex-col lg:flex-row font-ali my-6 lg:pe-5`}>
            <div className={` flex-1 flex flex-col content-center duration-[1s] ${serviceFlag ? "" : "translate-x-[-300px] opacity-0"}`}>
                <h3 className='text-white flex justify-center lg:justify-start my-4 uppercase text-[17px] font-[400] font-ali tracking-[3px]'>CREATIVE SOLUTIONS</h3>
                <h2 className='uppercase flex-grow items-center text-[50px] md:leading-[120px] md:text-[112px] font-[600] flex justify-center lg:justify-start'>services</h2>
                <p className={`font-medium text-center my-4 text-[17px] leading-[24px] text-[#9b9b9b] lg:text-start`}>Our design agency offers innovative solutions <br /> that captivate customers, drive engagement and get results.</p>
            </div>
            <div className={`lg:ps-5 flex-1 flex flex-col px-1 duration-[1s] ${serviceFlag ? "" : "translate-x-[300px] opacity-0"}`}>
                {
                    cards.map((val)=>(
                        <Card key={val.id} title={val.title} pic={val.pic} />
                    ))
                }
            </div>
        </section>
    )
}

export default Services