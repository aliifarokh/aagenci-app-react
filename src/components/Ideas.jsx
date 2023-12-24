import React from 'react'
import Button1 from './Button1'
import { heropic1, heropic2, iphone14 } from '../assets'

const Ideas = () => {
    return (
        <section className={`flex flex-col w-full min-h-[540px] bg-[url(./assets/footerBack.jpg)] bg-center bg-cover bg-no-repeat`}>
            <div className={`w-full flex-1 bg-[#000000be] flex justify-center items-center relative overflow-hidden`}>
                <div className='flex flex-col justify-center items-center max-w-[480px] px-5'>
                    <h3 className='text-white text-center my-4 uppercase text-[17px] font-[400] font-ali tracking-[4px]'>DESIGN + DEVELOPMENT</h3>
                    <h2 className='text-[55px] text-center my-4 md:text-[65px] leading-[65px] font-[600] '>
                        LET'S DISCUSS <span className='text-[#d7eb6e]'>YOUR IDEAS</span>
                    </h2>
                    <p className={`font-[400] mb-5 text-center text-[18px]  text-[#9b9b9b]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit . Vestibulum convallis, dolor sed consectetur gravida</p>
                    <Button1 title={"get in touch"} />
                    <img className='absolute hidden md:flex top-[-22%] w-[240px] h-[180px] rounded-[20px] rotate-[-30deg] left-[18%] object-contain' src={heropic1} alt="heropic1" />
                    <img className='absolute hidden md:flex top-[46%] w-[240px] h-[180px] rounded-[20px] rotate-[20deg] right-[-96px] object-contain' src={heropic2} alt="heropic2" />
                    <img className='absolute hidden md:flex bottom-[-10%] w-[240px] h-[180px] rounded-[20px] rotate-[-20deg] left-[6%] object-contain' src={iphone14} alt="iphone14" />
                </div>
            </div>
        </section>
    )
}

export default Ideas