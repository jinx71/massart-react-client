import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GallaryGrid from '../GallaryGrid/GallaryGrid';
const GallaryPageSection01 = () => {
    const currentPath = useLocation();
    
     const [isSelectTab, setIsSelectTab] = useState(0);
  const handleTabChange = (indexNum, e) => {
    setIsSelectTab(indexNum);
    e.preventDefault();
  }
    return (
        <div className='lg:mt-[150px] xs:mt-[60px] xs:px-[32px] lg:px-[120px]'>
    <div>
        <div className="grid-col-1 lg:text-center text-red-600 block font-[Helvetica] md:text-[42px] text-[24px] font-bold">
        The Gallery of <span className="text-red-600">Durga Puja Art</span>
      </div>
        <div className="flex justify-center gap-x-[15px] my-[25px] items-center">
         <button
      onClick={() => handleTabChange(0)}
      className={
        isSelectTab === 0
          ? "xs:text-[12px] xs:leading-[18px] font-helvetica font-bold xs:px-[38.5px] xs:py-[8px] text-white bg-buttonCustomColor border border-transparent hover:bg-transparent hover:text-black hover:border-buttonCustomColor rounded-[3px]"
          : "xs:text-[12px] xs:leading-[18px] font-helvetica font-bold xs:px-[38.5px] xs:py-[8px] bg-transparent border text-black border-buttonCustomColor hover:bg-buttonCustomColor hover:text-white hover:border-transparent rounded-[3px]"
      }
    >
      Still
    </button>
           <button
      onClick={() => handleTabChange(1)}
      className={
        isSelectTab === 1
          ? "xs:text-[12px] xs:leading-[18px] font-helvetica font-bold xs:px-[38.5px] xs:py-[8px] text-white bg-buttonCustomColor border border-transparent hover:bg-transparent hover:text-black hover:border-buttonCustomColor rounded-[3px]"
          : "xs:text-[12px] xs:leading-[18px] font-helvetica font-bold xs:px-[38.5px] xs:py-[8px] bg-transparent border text-black border-buttonCustomColor hover:bg-buttonCustomColor hover:text-white hover:border-transparent rounded-[3px]"
      }
    >
      Video
    </button>
        </div>
       <GallaryGrid></GallaryGrid>
        {/* button */}
        {
          (currentPath.pathname == "/" || currentPath.pathname == "/home") && (
            <Link to='/gallary'>
         <button
          className="xs:mt-[25px]  xs:text-[14px] xs:leading-[14px] font-helvetica font-bold text-buttonCustomColor border border-buttonCustomColor
           xs:px-[17px] xs:py-[9px] rounded-full w-full lg:mt-[50px]"
        >
          Browse More
        </button>
        </Link>
          )
        }
       
      </div>
        </div>
    );
};

export default GallaryPageSection01;