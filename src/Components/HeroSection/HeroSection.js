import React from 'react';
import HeaderVideo from "../../Assets/Video/Header.mp4";
import Navbar from '../Navbar/Navbar';
import SocialIcons from '../SocialIcons/SocialIcons';
import { useLocation } from 'react-router-dom';
import bg from '../../Assets/Image/Hero.png';
const HeroSection = () => {
  const currentPath = useLocation();
  const path = currentPath.pathname;
  console.log (bg);
  return (
    <div className='relative'>
     {
      (path == "/" || path == "/home" ) ? (
        <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={HeaderVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      ) : 
      
      <div 
        className="absolute h-[100vh] w-[100vw] object-cover z-0"
        
      >
        <img src={bg}
        className='w-full h-full object-cover z-0'
        
        ></img>
      </div>
      
     }
      <Navbar></Navbar>
      <SocialIcons></SocialIcons>
    </div>
  );
};

export default HeroSection;