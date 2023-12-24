import React, { useState } from 'react'
import { iphone14 } from '../assets'

const Iphone = ({scale, ali}) => {
    return (
        <div className='w-full my-3'>
            <figure ref={ali} className={`w-full relative overflow-hidden`}>
                <img className={`w-full object-cover scale-[${scale}] xs:max-h-[80vh]`} src={iphone14} alt="iphone14" />
            </figure>
        </div>
    )
}

export default Iphone