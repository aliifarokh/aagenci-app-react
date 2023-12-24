import React from 'react'
import { GRB } from '../assets'

const Button1 = ({ title }) => {
    return (
        <>
            <button type='button' className='flex group'>

                <div className="relative overflow-hidden duration-[2s] ease-in-out cursor-pointer">
                    <div className="group-hover:-translate-y-full duration-[.4s]">
                        <a className={`uppercase text-[14px] font-ali font-[500] duration-[.4s] tracking-[5px] mr-2`} href="">{title}</a>
                    </div>
                    <div className="absolute group-hover:-translate-y-full duration-[.4s]">
                        <a className={`uppercase text-[14px] font-ali font-[500] duration-[.4s] tracking-[5px] hover:text-[#c7d75d] mr-2`} href="">{title}</a>
                    </div>
                </div>
                <div className="relative overflow-hidden duration-[2s] ease-in-out cursor-pointer rotate-90">
                    <div className="group-hover:-translate-y-full duration-[.4s]">
                        <img className={`duration-[.4s] -rotate-90`} src={GRB} alt="arrowright" />
                    </div>
                    <div className="absolute group-hover:-translate-y-full duration-[.4s]">
                        <img className={`duration-[.4s] -rotate-90`} src={GRB} alt="arrowright" />
                    </div>
                </div>


            </button>
        </>
    )
}

export default Button1