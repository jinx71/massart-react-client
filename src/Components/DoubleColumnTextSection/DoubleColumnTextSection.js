import React from 'react';
import HomePageImage01 from "../../Assets/Image/Homepage/homepage_Image_01.jpg"
import { Link } from 'react-router-dom';

const DoubleColumnTextSection = ({sectionText}) => {
    return (
        <div className=" bg-white  xs:mx-[32px] font-helvetica lg:mt-[150px] xs:mt-[60px]">
        <div className="flex flex-col lg:flex-row-reverse justify-center lg:gap-[92px] ">
        <div className="lg:w-1/2">
          <h1 className="xs:text-[24px] lg:text-[42px] xs:leading-[36px] font-bold xs:pb-[15px]">
            {sectionText.sectionText.HeadingBlackPart}
            <span className="text-buttonCustomColor "> {sectionText.sectionText.HeadingRedPart} </span>
          </h1>
          <p
            className=" font-normal  xs:text-[12px] xs:leading-[24px] xs:pb-[25px] lg:text-[16px]
          "
          >
           {sectionText.sectionText.Paragraph}
          </p>
          {sectionText.sectionText.Button ? 
          <Link href='/about'>
    <button
            className="bg-buttonCustomColor text-white text-[12px] leading-[24px]  font-bold
        px-[17px] py-[4px] rounded-full hidden lg:block"
          >
            Read More
          </button>
  </Link>
 : <></> }
         </div>
         <div className="">
          <img
            src= {HomePageImage01}
            alt={sectionText.sectionText.ImageTitle}
            width={527}
            height={411}
            
            className="w-full h-[347px] object-cover rounded-[10px]
               "
          />
        </div>
        
        </div>
        <div>
        {sectionText.sectionText.Button ? 
          <Link href='/about'>
    <button
            className="bg-buttonCustomColor text-white text-[12px] leading-[24px]  font-bold
        px-[17px] py-[4px] rounded-full lg:hidden block mt-[25px]"
          >
            Read More
          </button>
  </Link>
 : <></> }
        
        </div>
      </div>
    );
};

export default DoubleColumnTextSection;