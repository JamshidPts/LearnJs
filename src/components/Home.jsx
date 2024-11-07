import React from 'react'
import Navbar from './Navbar'
import headerImg from '../assets/headerImg.png'

function Home() {
  const headerChallenge = "px-[50px] py-[10px] border text border-white rounded-md font-bold";
  const hoverChallenge = "transition-all ease-in delay-[0.5] hover:bg-[#F3CD03] hover:text-[#26335D]"
  return (
    <>
    <header className='container min-h-[100vh]'>
    <Navbar />
    <div className='grid grid-cols-2 place-items-center pt-[70px]'>
      <div className='pr-[80px]'>
        <p className='text-[#F3CD03] font-sans font-bold'>For Better Future</p>
        <h1 className='text-[3.625rem] font-bold w-[450px] font-sans py-[25px]'>HIGH QUALITY LESSONS</h1>
        <p className='w-[300px] pb-[30px]'>Find the right instructor for you from over 10,000 teachers</p>
        <div>
          <button className={`${headerChallenge} ${hoverChallenge}`}>Challenge</button>
        </div>
      </div>
        <div>
          <img src={headerImg} alt="" />
        </div>
    </div>
    </header>
    </>
  )
}

export default Home