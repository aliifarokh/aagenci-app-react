import React from 'react'
import DesCard from './DesCard'
import { desCards } from '../constants'


const Des = ({}) => {
  return (
    <section className='w-full flex flex-col font-ali text-white'>
        {
            desCards.map((item)=>{
                return(
                    <DesCard key={item.id} src={item.image} alt={item.title} title={item.title} btnTitle={item.buttonContent} />
                )
            })
        }
    </section>
  )
}

export default Des