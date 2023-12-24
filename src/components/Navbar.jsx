import React, { useLayoutEffect, useRef, useState } from 'react';
import { logo, hamMenu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className='w-full justify-between  items-center flex py-10'>
            <img src={logo} className={`w-[100px] relative z-[12] h-[22px] object-contain`} alt="aagenci" />
            <div className={`flex lg:hidden  absolute w-full duration-[.4s] ${toggle ? "top-[0vh]" : "top-[-100vh]"} left-0 h-[100vh] justify-center content-center`}>
                <ul className='flex flex-col w-full z-[10] h-full justify-center content-center bg-[#000000]'>
                    {
                        navLinks.map((link) => (
                            <li key={link.id} className={`text-[#f0f0f0] flex  uppercase w-full justify-center text-[62px] tracking-wide font-thin font-ali`}>
                                <a className={`flex hover:text-[#c7d75d]  duration-[.4s] px-5`} href={`#${link.id}`}>
                                    {link.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <ul className={`hidden lg:flex flex-1 justify-end `}>
                {navLinks.map((link) => (
                    <li key={link.id} className={`text-[#f0f0f0] uppercase text-[16px] font-ali group relative overflow-hidden duration-[2s] ease-in-out`}>
                        <div className="group-hover:-translate-y-full duration-[.4s]">
                            <a className={`flex duration-[.4s] px-5`} href={`#${link.id}`}>
                                {link.title}
                            </a>
                        </div>
                        <div className="absolute group-hover:-translate-y-full duration-[.4s]">
                            <a className={`flex hover:text-[#c7d75d] duration-[.4s] px-5`} href={`#${link.id}`}>
                                {link.title}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
            <img className={`w-8 h-8 flex lg:hidden object-contain cursor-pointer z-[12]`} onClick={() => setToggle((prev) => !prev)} src={hamMenu} alt="menu" />



        </nav>
    );
};

export default Navbar;
