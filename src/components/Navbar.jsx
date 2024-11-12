import React from 'react'
import logo from "../assets/js_logo.png"
import { Link } from 'react-router-dom';

function Navbar() {
  const navItem = "py-[5px] border-b-2 border-transparent";
  const navJoin = "bg-[#F3CD03] px-[21px] py-[11px] rounded-md text-[#26335D] text-sm font-bold";
  const itemHover = "transition-all ease-in delay-[0.6] hover:border-[#F3CD03] ease-in duration-300";
  const navLogin = "px-[20px] py-[10px] border text border-white rounded-md font-bold";
  const hoverLogin = "transition-all ease-in delay-[0.5] hover:bg-[#F3CD03] hover:text-[#26335D] ease-in duration-300"
  const hoverJoin = "transition-all ease-in delay-[0.5] border border-white hover:bg-transparent hover:text-white ease-in duration-300"

  return (
    <>
      <nav className='flex items-center justify-between py-[10px]'>
        <Link to='/'>
          <img src={logo} alt="js" className='w-[55px] rounded-md' />
        </Link>
        <div className='flex gap-[40px] font-sans text-xl p-[10px] '>
          <a href="/" className={`${navItem} ${itemHover}`}>Home</a>
          <a href="#Lessons" className={`${navItem} ${itemHover}`}>Lessons</a>
          <a href="#AboutUs" className={`${navItem} ${itemHover}`}>About Us</a>
          <a href="#ContactUs" className={`${navItem} ${itemHover}`}>Contact Us</a>
        </div>
        <div className="flex gap-[30px] p-[10px]">
          <button><a href="#" className={`${navLogin} ${hoverLogin}`}>Login</a></button>
          <button><a href="#" className={`${navJoin} ${hoverJoin}`}>JOIN US</a></button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
