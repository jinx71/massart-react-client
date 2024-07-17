import React from 'react';
import { Link } from 'react-router-dom';

const DoubleColumnTextSection = ({sectionText}) => {
  console.log(sectionText);
return (
<div className="bg-white font-helvetica lg:mt-[150px] xs:mt-[60px] lg:px-[120px] xs:px-[32px]">
  <div className="flex flex-col lg:flex-row-reverse justify-between lg:gap-[92px] ">
    <div className="lg:w-1/2">
      <h1 className="xs:text-[24px] lg:text-[42px] xs:leading-[36px] font-bold xs:pb-[15px]">
        {sectionText.sectionText.HeadingBlackPart}
        <span className="text-buttonCustomColor "> {sectionText.sectionText.HeadingRedPart} </span>
      </h1>
      {
       (
        sectionText.sectionText.Path !== "/concept" && 
        sectionText.sectionText.Path !== "/preview-show-2023" &&
        sectionText.sectionText.Path !== "/preview-show-2024"
      ) && (
      <p className=" font-normal  xs:text-[12px] xs:leading-[24px] xs:pb-[25px] lg:text-[16px]">
        {sectionText.sectionText.Paragraph}
      </p>
      )
      }

      {
      (
        sectionText.sectionText.Path === "/concept" || 
        sectionText.sectionText.Path === "/preview-show-2023" ||
        sectionText.sectionText.Path === "/preview-show-2024"
      ) && (
      <>
        <p className="font-normal xs:text-[12px] xs:leading-[24px] xs:pb-[25px] lg:text-[16px]">
          {sectionText.sectionText.Paragraph01}
        </p>
        <p className="font-normal xs:text-[12px] xs:leading-[24px] xs:pb-[25px] lg:text-[16px]">
          {sectionText.sectionText.Paragraph02}
        </p>
        <p className="font-normal xs:text-[12px] xs:leading-[24px] xs:pb-[25px] lg:text-[16px]">
          {sectionText.sectionText.Paragraph03}
        </p>
      </>
      )
      }
      {sectionText.sectionText.Button &&
      <Link to='/about'>
      <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px]  font-bold
        px-[17px] py-[4px] rounded-full hidden lg:block">
        Read More
      </button>
      </Link>
      }
    </div>
    {
      (
        sectionText.sectionText.Path !== "/concept" && 
        sectionText.sectionText.Path !== "/preview-show-2023" &&
        sectionText.sectionText.Path !== "/preview-show-2024"
      ) && (
        <div className="">
      <img src={sectionText.sectionText.Image} alt={sectionText.sectionText.ImageTitle} 
        className="w-full h-[347px] object-cover rounded-[10px] w-full h-[100%] object-cover"/>
    </div>
      )
    }
      {
        (
          sectionText.sectionText.Path === "/concept" || 
          sectionText.sectionText.Path === "/preview-show-2023" ||
          sectionText.sectionText.Path === "/preview-show-2024"
        ) && (
          <div className="">
          <img src={sectionText.sectionText.Image} alt={sectionText.sectionText.ImageTitle} 
            className="w-full h-[347px] object-cover rounded-[10px] w-[527px] h-[777px] object-cover"/>
        </div>
          )
      }
  </div>
  <div>
    {sectionText.sectionText.Button ?
    <Link to='/about'>
    <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px]  font-bold
        px-[17px] py-[4px] rounded-full lg:hidden block mt-[25px]">
      Read More
    </button>
    </Link>
    : <></> }

  </div>
</div>
);
};

export default DoubleColumnTextSection;