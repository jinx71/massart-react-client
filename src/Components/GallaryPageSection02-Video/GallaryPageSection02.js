import React from 'react';
import GallaryImage01 from "../../Assets/Image/GallaryPage/1.jpg";

const GallaryPageSection02 = () => {
    return (
        <div className='xs:px-[32px] lg:px-[120px]'>
        <div className="lg:mt-[150px] xs:mt-[60px]">
      <div>
        <div className="grid-col-1 text-red-600 block font-[Helvetica] md:text-[42px] text-[24px] xs:mb-[25px] lg:mb-[50px] font-bold">
       <span className="text-red-600">Videos</span>
      </div>
      </div>
      </div>
      <div className='lg:grid lg:grid-cols-2 xs:flex xs:flex-col xs:gap-[8px] lg:gap-[30px]'>
      <div>
                <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage01} alt="" width={100} height={100} />
            </div>
            <div>
                <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage01} alt="" width={100} height={100} />
            </div>
            <div>
                <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage01} alt="" width={100} height={100} />
            </div>
            <div>
                <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage01} alt="" width={100} height={100} />
            </div>
      </div>
      
      </div>
    );
};

export default GallaryPageSection02;