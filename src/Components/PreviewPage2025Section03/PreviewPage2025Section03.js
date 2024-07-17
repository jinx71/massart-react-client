import React from 'react';


import { FaTrainSubway } from "react-icons/fa6";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoMdBus } from 'react-icons/io';
import Carousel from "../Carousel/Carousel";

const PreviewPage2025Section03 = () => {
    return (
        <div className='lg:mt-[150px] xs:mt-[60px]'>
            <div className="text-center font-[Helvetica] md:text-[42px] xs:text-[24px] md:leading-[56px] leading-[30px] font-bold md:mb-[50px] mb-[30px] ">
        How To Reach <br /> <span className="text-buttonCustomColor">Kolkata?</span>
      </div>

      <div className='mb-[58px] md:hidden block'>
        <Carousel />
      </div>
      <div className="md:grid hidden lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] mb-[150px]">
        <div className="flex justify-center items-center">
          <div
            style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }}
            className="group custom-width bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 w-[100px] h-[100px] flex justify-center items-center rounded-full group-hover:bg-white transition duration-300">
                <GiAirplaneDeparture className="group-hover:text-red-500 text-white w-[52px] h-[52px]" />
              </div>
            </div>
            <p className="text-black text-[18px] leading-[30px] text-base group-hover:text-white transition duration-300">
              Netaji Subhas Chandra Bose International Airport, Kolkata, and its neighboring district airport, Kazi Nazrul Islam Airport in Andal, Burdwan, have airways access to almost all major cities of India and abroad.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }}
            className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 w-[100px] h-[100px] flex justify-center items-center rounded-full group-hover:bg-white transition duration-300">
                <FaTrainSubway className="group-hover:text-red-500 text-white w-[52px] h-[52px]" />
              </div>
            </div>
            <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300">
              Kolkata is directly connected for railways also in terms of Indian major cities. There are two main railway stations for the city - Sealdah and Howrah.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }}
            className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 w-[100px] h-[100px] flex justify-center items-center rounded-full group-hover:bg-white transition duration-300">
                <IoMdBus className="group-hover:text-red-500 text-white w-[52px] h-[52px]" />
              </div>
            </div>
            <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300">
              The city is well-connected by the road network to the rest of the country. NH 2 connects Delhi with Kolkata. Other important national highways are NH 6 (Mumbai), NH 34 (Siliguri), and NH 41 (Haldia).
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default PreviewPage2025Section03;