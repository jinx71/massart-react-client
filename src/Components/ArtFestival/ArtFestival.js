"use client";

import { useState } from "react";

import VisualsSectionImage01 from "../../Assets/Image/Homepage/VisualsSection01.jpg";
const ArtFestival = () => {
  const [activeButton, setActiveButton] = useState("Donor Pass");
    const [isSelectTab, setIsSelectTab] = useState(0);
  const handleTabChange = (indexNum) => {
    setIsSelectTab(indexNum);
  }

  const buttons = [
    { label: "Donor Pass", id: "Donor Pass", imageIndex: 1 },
    { label: "Preview Pass", id: "Preview Pass", imageIndex: 2 },
  ];

  return (
    <div
      className="lg:mt-[150px] xs:mt-[60px] lg:px-[120px] xs:px-[32px] bg-white font-helvetica"
    >
      <div className="lg:w-1/2 xs:w-full mx-auto text-center ">
        <h1 className=" xs:text-[24px] lg:text-[42px] font-bold  font-helvetica xs:leading-[35px] lg:leading-[74.5px] ">
          Witness the World's Biggest Public
          <span className="text-buttonCustomColor"> Art Festival</span>
        </h1>
      </div>

      {/* button */}

      <div className="grid grid-cols-3 justify-between items-center xs:gap-x-[10px] lg:my-[50px] lg:w-1/2 mx-auto xs:my-[25px]">
 <button
      onClick={() => handleTabChange(0)}
      className={
        isSelectTab === 0
          ? "xs:text-[11px] xs:leading-[24px] xs:py-[4px] xs:px-[15px] font-bold font-helvetica text-white border border-transparent bg-buttonCustomColor rounded-full"
          : "xs:text-[11px] xs:leading-[24px] xs:py-[4px] xs:px-[15px] rounded-full font-bold font-helvetica border border-buttonCustomColor hover:bg-buttonCustomColor hover:border-transparent hover:text-white text-black"
      }
    >
      Donor Pass
    </button>
    
         <button
      onClick={() => handleTabChange(1)}
      className={
        isSelectTab === 1
          ? "xs:text-[11px] xs:leading-[24px] xs:py-[4px] xs:px-[15px] font-bold font-helvetica text-white border border-transparent bg-buttonCustomColor rounded-full"
          : "xs:text-[11px] xs:leading-[24px] xs:py-[4px] xs:px-[15px] rounded-full font-bold font-helvetica border border-buttonCustomColor hover:bg-buttonCustomColor hover:border-transparent hover:text-white text-black"
      }
    >
     Preview Pass
    </button>
    <button
      onClick={() => handleTabChange(1)}
      className={
        isSelectTab === 1
          ? "xs:text-[11px] xs:leading-[24px] xs:py-[4px] xs:px-[15px] font-bold font-helvetica text-white border border-transparent bg-buttonCustomColor rounded-full"
          : "xs:text-[11px] xs:leading-[24px] xs:py-[4px] xs:px-[15px] rounded-full font-bold font-helvetica border border-buttonCustomColor hover:bg-buttonCustomColor hover:border-transparent hover:text-white text-black"
      }
    >
     View More
    </button>
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

export default ArtFestival;
