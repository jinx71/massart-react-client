import React from 'react';
import HeaderVideo from "../../Assets/Video/Header.mp4";
import Navbar from '../Navbar/Navbar';
import SocialIcons from '../SocialIcons/SocialIcons';
const HeroSection = () => {
  return (
    <div className='relative'>
     <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={HeaderVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar></Navbar>
      <SocialIcons></SocialIcons>
    </div>
  );
};

export default HeroSection;