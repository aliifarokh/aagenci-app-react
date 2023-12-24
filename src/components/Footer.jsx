import React from 'react'
import { logo } from '../assets'
import { footerLinks } from '../constants'

const Footer = () => {
    return (
        <footer className={`flex justify-center items-center w-[82%] mt-11 py-11  mx-auto flex-col`}>
            <div className={`flex w-full pb-14 flex-col md:flex-row md:justify-between items-center md:items-start border-b-[1px] border-[#dbff00]`}>
                <img className={`w-[100px] relative z-[12] h-[22px] object-contain`} src={logo} alt="logo" />
                {
                    footerLinks.map((val, i) => (
                        <div key={val.title} className={`flex flex-col  ${i == 1 ? "mt-16 mb-8" : "my-8"} md:m-0`}>
                            <h4 className='uppercase text-[18px] font-semibold tracking-[5px] me-3 text-center w-full'>{val.title}</h4>
                            <ul className='flex flex-col justify-between'>
                                {
                                    val.links.map((item) => (
                                        <li key={item.name} className='my-3'>
                                            <a className='text-[17px] font-[500] hover:text-[#c7d75d] duration-[.4s] capitalize text-[#797979] flex w-full h-full justify-center' href="">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                    ))
                }
            </div>
            <div className='pt-7 flex w-full flex-col items-center text-[18px] text-[#797979] font-[500] lg:flex-row lg:justify-between'>
                <span>© 2023 AAGENCI. All Rights Reserved.</span>
                <span>Powered By <a className='hover:text-[#c7d75d] duration-[.4s] pe-3' href="https://webflow.com/dashboard?r=1">Webflow</a> Built By <a className='hover:text-[#c7d75d] duration-[.4s]' href="https://aliifarokh.github.io/portfolio/">Ali Farokh</a></span>
            </div>
        </footer>
    )
}

export default Footer