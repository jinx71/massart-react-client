import React from 'react';
import VisualsSectionImage01 from "../../Assets/Image/Homepage/VisualsSection01.jpg";
const RegisterPageSection03 = () => {
    return (
        <div className='lg:mt-[150px] xs:mt-[60px] xs:px-[32px] lg:px-[120px]'>
    <div className="bg-white xs:text-left xs:pb-[15px] lg:mb-[50px] mx-auto lg:text-center">
      <h1 className="xs:text-[24px] lg:text-[42px] xs:leading-[36px] font-bold   ">features of 
        <span className="text-buttonCustomColor"> {` `}preview pass </span>
      </h1>
      <ul className='list-disc text-left my-[25px]'>
        <li>express entry</li>
        <li>seamless viewing before gates open for masses</li>
        <li>exclusive photo opportunities for stills and reels</li>
        <li>exclusive night viewing</li>
        <li>guided Art walkthrough</li>
        <li>1 pass for all 27 spectacular Art venues</li>
      </ul>
      </div>

      <div className="lg:grid lg:grid-cols-1 xs:flex xs:flex-row overflow-x-scroll no-scrollbar gap-[20px]">
       
        <img
          className=" h-full w-full object-cover rounded-[10px]"
          src={VisualsSectionImage01}
          alt=""
          width={100}
          height={100}
        />
        
      </div>
    </div>

    );
};

export default RegisterPageSection03;