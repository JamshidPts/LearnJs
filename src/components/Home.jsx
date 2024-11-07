import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { PreLessons } from '../data/preLesons'

function Home() {
  const navLogin = "px-[40px] py-[10px] border text border-white rounded-md font-bold";
  const hoverLogin = "transition-all ease-in delay-[0.5] hover:bg-[#F3CD03] hover:text-[#26335D]"

  return (
    <>
      <header className='container min-h-[100vh]'>
        <Navbar />
      </header>

      <main>
        <section className='container min-h-[600px]' >
          <div className='py-[60px] text-center'>
            <h2 className='text-[40px] font-[700]'>Our Main Lessons</h2>
            <p className='text-[#F3CD03]'>For Better Future</p>
          </div>

          <div className='flex justify-center space-x-[30px] mb-[60px]'>
            {PreLessons.map((item) => (
              <div className='bg-white min-h-[200px] max-w-[340px] rounded-[10px] text-black p-[44px]' key={item.id} >
                <h4 className='font-bold  mb-[10px]'> {item.title}</h4>
                <p className='text-[14px]'>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/lessons">
              <button className={`${navLogin} ${hoverLogin}`}>See all</button>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
