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
        <div className='nav w-11/12 mx-auto h-14 md:h-16 bg-white/25 text-white rounded-md backdrop-blur-md flex items-center justify-between px-4 z-20 border-b'>
          {/* title */}
          <div>
            <p className='text-3xl md:text-4xl font-glitch md:mx-10'>Siva</p>
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
            <Hamburger rounded toggled={isOpen} toggle={setOpen} />
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
                <ul className='flex flex-col justify-between items-start w-full h-32 my-4 px-4'>
                  <li className='hover:underline'><a href="https://www.linkedin.com/in/siva-r-503883277/">linked In</a></li>
                  <li className='hover:underline'><a href="https://www.naukri.com/mnjuser/profile?id=&altresid">Naukri</a></li>
                  <li className='hover:underline'><a href="https://github.com/CeoSiva">Github</a></li>
                  <li className='hover:underline'><a href="tel:+917904391341">Call Me</a></li>
                </ul>
                <div className='w-full flex justify-center'>
                  <button onClick={handleDownload} className='w-11/12 h-12 rounded-md border-2 font-audiowide hover:bg-white hover:text-black/80'>Download CV</button>
                </div>
            </motion.div>
          }
          </AnimatePresence>
        </div>
      </div>

      {/* body Elements */}
      <div className='w-full'>
        <div className='flex flex-col pt-5 transition-all ease-in duration-300'>
          <div className='w-fit ml-5 my-1 md:w-7/12 md:mx-auto md:mt-80'>
            <p className='font-audiowide text-xs md:text-lg text-white'>Hi there,</p>
          </div>
          <div className='md:w-7/12 md:mx-auto'>
            <div className='w-fit border border-sky-500 relative ml-10 my-1 z-0'>
              <span className='absolute w-2 h-2 -top-1 -left-1 bg-sky-500 border border-white'></span>
              <span className='absolute w-2 h-2 -top-1 -right-1 bg-sky-500 border border-white'></span>
              <span className='absolute w-2 h-2 -bottom-1 -left-1 bg-sky-500 border border-white'></span>
              <span className='absolute w-2 h-2 -bottom-1 -right-1 bg-sky-500 border border-white'></span>
              <p className='text-white text-sm md:text-lg font-audiowide mx-3 my-1'>i'm<span className='text-xl md:text-2xl'> Siva</span></p>
            </div>
          </div>

          <div className='md:absolute top-[540px] md:top-[560px] w-full flex justify-center'>
            <p className='md:absolute font-audiowide text-xl md:text-6xl md:font-stroke text-white z-10'>Frontend Developer</p>
            <p className='absolute hidden md:block font-audiowide md:text-6xl font-stroke text-transparent z-20'>Frontend Developer</p>
          </div>
          <div className='md:hidden w-full flex justify-center'>
            <p className='font-audiowide text-white'>&</p>
          </div>
          <div className='md:absolute top-[620px] md:top-[640px] w-full flex justify-center'>
            <p className='absolute hidden md:block font-audiowide text-4xl md:text-9xl md:font-stroke text-white z-10'>UI/UX Designer</p>
            <p className='md:absolute font-audiowide text-4xl md:text-9xl font-stroke text-transparent z-20'>UI/UX Designer</p>
          </div>
          <div className='w-fit border border-sky-500 relative self-end mr-5 md:mr-80 mt-2 md:top-72 z-20'>
            <span className='absolute w-2 h-2 -top-1 -left-1 bg-sky-500 border border-white'></span>
            <span className='absolute w-2 h-2 -top-1 -right-1 bg-sky-500 border border-white'></span>
            <span className='absolute w-2 h-2 -bottom-1 -left-1 bg-sky-500 border border-white'></span>
            <span className='absolute w-2 h-2 -bottom-1 -right-1 bg-sky-500 border border-white'></span>
            <p className='text-white text-xs md:text-lg font-audiowide mx-3 my-1'>at your service...</p>
          </div>
        </div>
        <div className='w-full absolute bottom-12 md:bottom-24'>
          <div className='w-full h-fit z-0'>
            <div className='absolute top-20 md:top-40 w-full flex justify-center'>
              <div className='flex w-7/12 md:w-1/5 justify-between'>
                <img className='w-10 h-10 md:w-16 md:h-16' src={figma} alt="figma" />
                <img className='w-12 h-12 md:w-20 md:h-20' src={illustrator} alt="ai" />
              </div>
            </div>
            <div className='absolute top-4 md:top-8 w-full flex justify-center'>
              <div className='flex w-10/12 md:w-2/6 justify-between'>
                <img className='w-12 h-12 md:w-20 md:h-20' src={framer} alt="framer" />
                <img className='w-12 h-12 md:w-20 md:h-20' src={react} alt="react" />
              </div>
            </div>
            <div className='absolute -top-10 md:-top-16 w-full flex justify-center'>
              <div className='flex w-7/12 md:w-1/5 justify-between'>
                <img className='w-12 h-12 md:w-20 md:h-20' src={photoshop} alt="ps" />
                <img className='w-12 h-12 md:w-20 md:h-20' src={html} alt="html" />
              </div>
            </div>
            <div className='absolute -top-16 md:-top-24 w-full flex justify-center'>
              <img className='w-12 h-12 md:w-20 md:h-20' src={wordpress} alt="wp" />
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <img className='img min-w-auto min-h-auto px-2 z-10' src={Myimg} alt="My Profile Img" />
          </div>
          <div className='absolute md:-bottom-20 w-full flex justify-center z-30'>
            <Hire/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
