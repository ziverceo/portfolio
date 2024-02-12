import React, { useState } from 'react'
import {Spiral as Hamburger} from 'hamburger-react';
import { motion, AnimatePresence, frame } from "framer-motion"
import { TbPhoneCall } from "react-icons/tb";

import "./App.css";

import CVbutton from './components/CVbutton';
import Hire from './components/Hire';

import Resume from './assets/files/Resume.pdf';
import Myimg from './assets/Images/MyImg.svg';
import figma from './assets/Images/tools/figma.png';
import framer from './assets/Images/tools/framer.png';
import html from './assets/Images/tools/HTML5.png';
import illustrator from './assets/Images/tools/illustrator.png';
import photoshop from './assets/Images/tools/photoshop.png';
import react from './assets/Images/tools/React.png';
import wordpress from './assets/Images/tools/wordpress.png';




const App = () => {
  const [isOpen, setOpen] = useState(false);
  const handleDownload = () => {
    window.open(Resume,"_blank","noreferrer");
  };
  return (
    <div className='bg w-screen h-screen bg-cover pt-4'>
      <div className='w-full h-auto relative'>
        <div className='nav w-11/12 mx-auto h-12 md:h-16 bg-white/25 text-white rounded-md backdrop-blur-md flex items-center justify-between px-4 z-20 border-b'>
          {/* title */}
          <div>
            <p className='text-xl md:text-4xl font-glitch lg:mx-10'>Siva</p>
          </div>

          {/* Desktop Nav items */}
          <div className='w-fit hidden md:block'>
            <div className='flex justify-between'>
              <a className='font-audiowide px-6 hover:underline' href="https://www.linkedin.com/in/siva-r-503883277/">Linked In</a> 
              <a className='font-audiowide px-6 hover:underline' href="https://www.naukri.com/mnjuser/profile?id=&altresid">Naukri</a>
              <a className='font-audiowide px-6 hover:underline' href="https://github.com/CeoSiva">Github</a>
            </div>
          </div>
          {/* call to action */}
          <div className='hidden md:block'>
            <div className='flex items-center'>
              <a href="tel:+917904391341">
                <TbPhoneCall className='w-6 h-6 mx-5' />
              </a>
              <CVbutton/>
            </div>
          </div>
          {/* Hamburger Icon */}
          <div className='md:hidden'>
            <Hamburger rounded size={24} toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        {/* mobile nav items */}
        <div className='w-full flex justify-center'>
          <AnimatePresence>
          {isOpen && 
            <motion.div
            initial={{y:-20, opacity:0}}
            animate={{y:0,opacity:1}}
            exit={{y:-20,opacity:0}}
            className='w-11/12 h-auto absolute text-white font-audiowide bg-white/25 rounded-md mt-1 py-3 md:hidden z-30 backdrop-blur-md'>
                <ul className='flex flex-col justify-between items-start w-full h-32 my-4 px-4 text-sm'>
                  <li className='hover:underline'><a href="https://www.linkedin.com/in/siva-r-503883277/">linked In</a></li>
                  <li className='hover:underline'><a href="https://www.naukri.com/mnjuser/profile?id=&altresid">Naukri</a></li>
                  <li className='hover:underline'><a href="https://github.com/CeoSiva">Github</a></li>
                  <li className='hover:underline'><a href="tel:+917904391341">Call Me</a></li>
                </ul>
                <div className='w-full flex justify-center'>
                  <button onClick={handleDownload} className='w-11/12 h-10 text-sm rounded-md border-2 font-audiowide hover:bg-white hover:text-black/80'>Download CV</button>
                </div>
            </motion.div>
          }
          </AnimatePresence>
        </div>
      </div>

      {/* body Elements */}
      <div className='w-full'>
        <div className='flex flex-col pt-10 transition-all ease-in duration-300'>
          <div className='w-fit ml-5 my-1 md:w-5/6 lg:w-1/2 md:mx-auto md:mt-80'>
            <p className='font-audiowide text-xs md:text-lg text-white'>Hi there,</p>
          </div>
          <div className='md:w-10/12 lg:w-1/2 md:mx-auto'>
            <div className='w-fit h-fit border border-sky-500 relative ml-10 my-1 z-0'>
              <span className='absolute w-1 h-1 md:w-2 md:h-2 -top-0.5 -left-0.5 md:-top-1 md:-left-1 bg-sky-500 border border-white'></span>
              <span className='absolute w-1 h-1 md:w-2 md:h-2 -top-0.5 -right-0.5 md:-top-1 md:-right-1 bg-sky-500 border border-white'></span>
              <span className='absolute w-1 h-1 md:w-2 md:h-2 -bottom-0.5 -left-0.5 md:-bottom-1 md:-left-1 bg-sky-500 border border-white'></span>
              <span className='absolute w-1 h-1 md:w-2 md:h-2 -bottom-0.5 -right-0.5 md:-bottom-1 md:-right-1 bg-sky-500 border border-white'></span>
              <p className='text-white text-xs md:text-lg font-audiowide mx-3 my-1'>i'm<span className='text-md md:text-2xl'> Siva</span></p>
            </div>
          </div>

          <div className='md:absolute top-[540px] md:top-[580px] lg:top-[540px] w-full flex justify-center'>
            <p className='md:absolute font-audiowide text-md md:text-5xl lg:text-6xl md:font-stroke text-white z-10'>Frontend Developer</p>
            <p className='absolute hidden md:block font-audiowide md:text-5xl lg:text-6xl font-stroke text-transparent z-20'>Frontend Developer</p>
          </div>
          <div className='md:hidden w-full flex justify-center'>
            <p className='font-audiowide text-xs text-white'>&</p>
          </div>
          <div className='md:absolute top-[620px] md:top-[650px] lg:top-[630px] w-full flex justify-center'>
            <p className='absolute hidden md:block font-audiowide text-4xl md:text-8xl lg:text-9xl md:font-stroke text-white z-10'>UI/UX Designer</p>
            <p className='md:absolute font-audiowide text-3xl md:text-8xl lg:text-9xl font-stroke text-transparent z-20'>UI/UX Designer</p>
          </div>
          <div className='absolute top-64 md:bottom-56 lg:bottom-32 w-full flex lg:w-4/5 justify-end mx-auto'>
            <div className='w-fit border h-fit border-sky-500 relative mr-4 self-end z-20'>
              <span className='absolute w-1 h-1 md:w-2 md:h-2 -top-0.5 -left-0.5 md:-top-1 md:-left-1 bg-sky-500 border border-white'></span>
              <span className='absolute w-1 h-1 md:w-2 md:h-2 -top-0.5 -right-0.5 md:-top-1 md:-right-1 bg-sky-500 border border-white'></span>
              <span className='absolute w-1 h-1 md:w-2 md:h-2 -bottom-0.5 -left-0.5 md:-bottom-1 md:-left-1 bg-sky-500 border border-white'></span>
              <span className='absolute w-1 h-1 md:w-2 md:h-2 -bottom-0.5 -right-0.5 md:-bottom-1 md:-right-1 bg-sky-500 border border-white'></span>
              <p className='text-white text-xs md:text-lg font-audiowide mx-3 my-1'>at your service...</p>
            </div>
          </div>
        </div>
        <div className='w-full absolute bottom-14 md:top-80 lg:top-60'>
          <div className='w-full h-fit z-0'>
            <div className='absolute top-12 md:top-28 lg:top-40 w-full flex justify-center'>
              <div className='flex w-2/5 md:w-2/5 lg:w-1/5 justify-between'>
                <img className='w-7 h-7 md:w-12 md:h-12 lg:w-16 lg:h-16' src={figma} alt="figma" />
                <img className='w-7 h-7 md:w-12 md:h-12 lg:w-16 lg:h-16' src={illustrator} alt="ai" />
              </div>
            </div>
            <div className='absolute top-4 md:top-6 lg:top-10 w-full flex justify-center'>
              <div className='flex w-3/5 md:w-2/3 lg:w-1/3 justify-between'>
                <img className='w-7 h-7 md:w-12 md:h-12 lg:w-16 lg:h-16' src={framer} alt="framer" />
                <img className='w-7 h-7 md:w-12 md:h-12 lg:w-16 lg:h-16' src={react} alt="react" />
              </div>
            </div>
            <div className='absolute -top-4 md:-top-16 lg:-top-20 w-full flex justify-center'>
              <div className='flex w-2/5 md:w-2/5 lg:w-1/5 justify-between'>
                <img className='w-7 h-7 md:w-12 md:h-12 lg:w-16 lg:h-16' src={photoshop} alt="ps" />
                <img className='w-7 h-7 md:w-12 md:h-12 lg:w-16 lg:h-16' src={html} alt="html" />
              </div>
            </div>
            <div className='absolute -top-6 md:-top-20 lg:-top-28 w-full flex justify-center'>
              <img className='w-7 h-7 md:w-12 md:h-12 lg:w-16 lg:h-16' src={wordpress} alt="wp" />
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <img className='img min-w-auto min-h-auto max-w-[350px] md:max-w-[600px] lg:max-w-[700px] px-5 z-10' src={Myimg} alt="My Profile Img" />
          </div>
          <div className='absolute -bottom-12 md:bottom-0 lg:-bottom-10 w-full flex justify-center z-30'>
            <Hire/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
