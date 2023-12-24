import React from 'react'
import Button1 from './Button1'
import Tags from './tags'

const DesCard = ({ src, alt, title, btnTitle}) => {

    return (
        <div className={`w-full flex flex-col lg:flex-row bg-black py-5 top-0 lg:sticky`}>
            <div className={`flex flex-1  my-4 justify-center items-center lg:me-12`}>
                <figure className='h-[480px] w-full rounded-[23px] overflow-hidden relative'>
                    <img className='h-full w-full object-cover cursor-pointer hover:scale-[1.1] duration-[.8s]' src={src} alt={alt} />
                </figure>
            </div>
            <div className={`flex flex-col flex-1 my-4`}>
                <h3 className='text-[30px] ss:text-[38px] md:text-[55px] font-[600] uppercase'>{title}</h3>
                <p className={`font-medium my-6 text-[17px] leading-[24px] text-[#9b9b9b] lg:text-start`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button1 title={btnTitle} />
                <div className='flex flex-1 items-end my-6 flex-wrap '>
                    <Tags content={"branding"} />
                    <Tags content={"design"} />
                    <Tags content={"development"} />
                </div>
            </div>
        </div>
    )
}

export default DesCard