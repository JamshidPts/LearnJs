import React from 'react';
import Navbar from './Navbar';
import headerImg from '../assets/headerImg.png';
import { Link } from 'react-router-dom';
import { PreLessons } from '../data/preLesons';
import { aboutUsSlider } from '../data/aboutUs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules'; // Import the modules here
import 'swiper/swiper-bundle.css';

function Home() {
  const headerChallenge = "px-[50px] py-[10px] border text border-white rounded-md font-bold";
  const hoverChallenge = "transition-all ease-in delay-[0.5] hover:bg-[#F3CD03] hover:text-[#26335D] ease-in duration-300";
  const navLogin = "px-[40px] py-[10px] border text border-white rounded-md font-bold";
  const hoverLogin = "transition-all ease-in delay-[0.5] hover:bg-[#F3CD03] hover:text-[#26335D] ease-in duration-300";
  const navJoin = "bg-[#F3CD03] px-[25px] py-[10px] rounded-md text-[#26335D] text-sm font-bold";
  const hoverJoin = "transition-all ease-in delay-[0.5] border border-white hover:bg-transparent hover:text-white ease-in duration-300";

  return (
    <>
      <header className='container min-h-[100vh]'>
        <Navbar />
        <div className='flex justify-around items-center pt-[70px]'>
          <div className='pr-[80px]'>
            <p className='text-[#F3CD03] font-sans font-bold'>For Better Future</p>
            <h1 className='text-[3.625rem] font-bold w-[450px] font-sans py-[25px]'>HIGH QUALITY LESSONS</h1>
            <p className='w-[300px] pb-[30px]'>Find the right instructor for you from over 10,000 teachers</p>
            <div>
              <button className={`${headerChallenge} ${hoverChallenge}`}>Challenge</button>
            </div>
          </div>
          <div>
            <img src={headerImg} alt="student" />
          </div>
        </div>
      </header>

      <main>
        <section className='container min-h-[600px]' id='Lessons'>
          <div className='py-[60px] text-center'>
            <h2 className='text-[40px] font-[700]'>Our Main Lessons</h2>
            <p className='text-[#F3CD03]'>Building Foundations for Tomorrow</p>
          </div>

          <div className='flex justify-center space-x-[30px] mb-[60px]'>
            {PreLessons.map((item) => (
              <div className='bg-white min-h-[200px] max-w-[340px] rounded-[10px] text-black p-[44px]' key={item.id}>
                <h4 className='font-bold mb-[10px]'> {item.title}</h4>
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

        <section className='container min-h-[600px]' id='AboutUs'>
          <div className='pt-[40px] mb-[60px] text-center'>
            <h2 className='text-[40px] font-[700]'>About us</h2>
            <p className='text-[#F3CD03]'>Learn, Grow, Achieve</p>
          </div>
          <div className='w-full max-w-[706px] mx-auto'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              modules={[Navigation, Autoplay, Pagination]}
            >
              {aboutUsSlider.map((subject) => (
                <SwiperSlide key={subject.id}>
                  <div className='flex justify-between my-[10px] min-h-[270px] bg-white p-[30px] rounded-[19px] space-x-6'>
                    <img className='w-[250px]' alt="About us, Icon" src={subject.image} />
                    <div>
                      <h4 className='text-[22px] text-[#F3CD03] font-bold text-center mb-[6px]'>{subject.title}</h4>
                      <p className='text-[#4D4D4D] text-[14px]'>{subject.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Custom Navigation Buttons */}
              <div className='flex justify-center space-x-4 mt-[20px] mb-[60px] '>
                <button className="custom-prev ease-in duration-300 p-[12px] text-[20px] w-11 h-9 flex items-center bg-[#F3CD03] text-[#26335D] rounded-[6px] hover:bg-[#26335D] hover:text-[#F3CD03] cursor-pointer">
                  &larr;
                </button>
                <button className="custom-next ease-in duration-300 p-[12px] text-[20px] w-11 h-9 flex items-center  bg-[#F3CD03] text-[#26335D] rounded-[6px] hover:bg-[#26335D] hover:text-[#F3CD03] cursor-pointer">
                  &rarr;
                </button>
              </div>
              {/* Pagination */}
              <style jsx="true">{`
                .swiper-pagination-bullet-active {
                background-color: #F3CD03;
                }`}
              </style>
            </Swiper>
          </div>
        </section>

        <section className='container min-h-[600px]' id='ContactUs'>
          <div className='py-[60px] text-center'>
            <p className='text-[#F3CD03]'>Newsletter</p>
            <h2 className='text-[40px] font-[700]'>Contact us</h2>
            <p className='text-[#FFFFFF] text-[14px] w-[400px] mx-auto pt-[10px] font-normal'>Contact Us — Together We'll Find a Solution. Your Questions, Our Answers. We're Here to Support You!
            </p>
          </div>
          <form action="#" className="flex flex-col items-center text-center text-[#000000]">
            <input
              type="email"
              placeholder="Your email"
              className="w-[435px] h-[50px] pl-[15px] rounded-[6px]"
            />
            <textarea
              name="text"
              id="text"
              placeholder="Message"
              className="w-[435px] h-[132px] rounded-[6px] mt-[30px] pl-[15px] pt-[20px]"
            ></textarea>
            <button type='submit' className={`${navJoin} ${hoverJoin} mt-[45px]`}>Submit</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default Home;
