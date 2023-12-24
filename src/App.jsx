import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Counts from './components/Counts'
import Dev from './components/Dev'
import Iphone from './components/Iphone'
import Services from './components/Services'
import BigText from './components/BigText'
import Dev2 from './components/Dev2'
import Des from './components/Des'
import Ideas from './components/Ideas'
import Footer from './components/Footer'

const App = () => {

  const countScroll = useRef(null)
  const devScroll = useRef(null)
  const serviceScroll = useRef(null)
  const dev2Scroll = useRef(null)

  const [flag, setFlag] = useState(false)
  const [devFlag, setDevFlag] = useState(false)
  const [serviceFlag, setServiceFlag] = useState(false)
  const [dev2Flag, setDev2Flag] = useState(false)

  const myScroll = (e) => {
    let st = e.target.scrollTop
    let countSt = countScroll.current.offsetTop
    let devSt = devScroll.current.offsetTop
    let serviceSt = serviceScroll.current.offsetTop
    let dev2St = dev2Scroll.current.offsetTop

    if ((st + 400) >= countSt) {
      setFlag(true)
    } else {
      setFlag(false)
    }

    if ((st + 400) >= devSt) {
      setDevFlag(true)
    } else {
      setDevFlag(false)
    }

    if ((st + 400) >= serviceSt) {
      setServiceFlag(true)
    } else {
      setServiceFlag(false)
    }

    if ((st + 400) >= dev2St) {
      setDev2Flag(true)
    } else {
      setDev2Flag(false)
    }


  }





  return (
    <main onScroll={(event) => myScroll(event)} className='w-full h-[100vh] overflow-x-hidden overflow-y-scroll bg-black'>

      <section className='w-full  text-white'>
        <div className={`sm:px-[66px] w-full relative 2xl:container mx-auto px-12 flex justify-center items-center`}>
          <div className='xl:max-w-[1070px] w-[90%]'>
            <Navbar />
          </div>
        </div>

        <div className="flex w-full 2xl:container mx-auto justify-center items-start my-5">
          <div className="xl:max-w-[1280px] w-full">
            <Hero />
          </div>
        </div>

        <div className='flex justify-center items-start w-full 2xl:container mx-auto px-12 md:px-20'>
          <div className="w-full flex flex-col  justify-center">
            <Counts count={countScroll} flag={flag} />
            <Dev dev={devScroll} devFlag={devFlag} />
          </div>
        </div>

        <div className={`w-full 2xl:container mx-auto mt-16`}>
          <Iphone />
        </div>

        <div className='flex justify-center items-start w-full 2xl:container mx-auto px-8 md:px-16 m-4'>
          <Services service={serviceScroll} serviceFlag={serviceFlag} />
        </div>
        <div className={`w-full flex 2xl:container`}>
          <BigText />
        </div>


        <div className='flex justify-center items-start w-full 2xl:container mx-auto px-8 md:px-16 lg:px-20 m-4'>
          <Des />
        </div>

        <div className='flex justify-center items-start w-full 2xl:container mx-auto'>
          <div className="w-full flex flex-col  justify-center text-white">
            <Dev2 dev2={dev2Scroll} dev2Flag={dev2Flag} />
            <Ideas />
            <Footer />
          </div>
        </div>

      </section>

    </main>
  )
}

export default App