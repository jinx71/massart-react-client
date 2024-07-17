"use client";
import { useState } from 'react';

import { FaRoad } from "react-icons/fa";
import { FaPeopleGroup, FaTrainSubway } from "react-icons/fa6";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoMdBus } from 'react-icons/io';

import GetTicket from '../GetTicket/GetTicket.js';


const PreviewPage2024Section02 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelectTab, setIsSelectTab] = useState(0);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleTabChange = (indexNum) => {
    setIsSelectTab(indexNum);
  }


    return (
        <div className='lg:mt-[150px] xs:mt-[60px]'>
            <div className="font-[Helvetica] md:text-[42px] md:leading-[56px] w-full md:text-center text-left xs:text-[24px] leading-[36px] font-bold md:mb-[50px] mb-[22px] xs:px-[32px]">
          preview show <span className="text-red-600">2024</span>
        </div>
      

      <div className="">
        <div className="overflow-x-auto flex justify-center items-center">
          <div className="md:w-1/2 w-full grid grid-flow-col md:gap-9 gap-3 md:mb-[50px] mb-[30px]">
            <button onClick={() => handleTabChange(0)}   className={
           isSelectTab === 0
          ? "md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white"
          : "md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] border border-buttonCustomColor text-black"
      }>
              plan your visit
            </button>
            <button onClick={() => handleTabChange(1)} className={
           isSelectTab === 1
          ? "md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white"
          : "md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] border border-buttonCustomColor text-black"
      }>
              programme
            </button>
            <button onClick={() => handleTabChange(2)} className={
           isSelectTab === 2
          ? "md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white"
          : "md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] border border-buttonCustomColor text-black"
      }>
              events
            </button>
            <button onClick={() => handleTabChange(3)} className={
           isSelectTab === 3
          ? "md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white"
          : "md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] border border-buttonCustomColor text-black"
      }>
              beyond Art
            </button>
          </div>
        </div>
        <div className="md:hidden block blur-effect"></div>
      </div>

{
  isSelectTab == 0 && <div
        className="relative rounded-[10px] bg-cover"
        style={{
          backgroundImage: 'url("https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 rounded-lg"></div>
        <GetTicket></GetTicket>
      </div>
}


{
  isSelectTab == 1 && <div
        className="relative rounded-[10px] bg-cover  mx-[32px]"
        style={{
          backgroundImage: 'url("https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 rounded-lg"></div>
        <GetTicket></GetTicket>
      </div>
}


{
  isSelectTab == 2 && <div
        className="relative rounded-[10px] bg-cover  mx-[32px]"
        style={{
          backgroundImage: 'url("https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 rounded-lg"></div>
        <GetTicket></GetTicket>
      </div>
}

{
  isSelectTab == 3 && <div
        className="relative rounded-[10px] bg-cover  mx-[32px]"
        style={{
          backgroundImage: 'url("https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 rounded-lg"></div>
        <GetTicket></GetTicket>
      </div>
}

        </div>
    );
};

export default PreviewPage2024Section02;