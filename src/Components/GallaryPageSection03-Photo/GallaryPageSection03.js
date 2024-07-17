import React from 'react';
import GallaryImage01 from "../../Assets/Image/GallaryPage/1.jpg";
import GallaryImage02 from "../../Assets/Image/GallaryPage/2.jpg";
import GallaryImage03 from "../../Assets/Image/GallaryPage/3.jpg";
import GallaryImage04 from "../../Assets/Image/GallaryPage/4.jpg";
import GallaryImage05 from "../../Assets/Image/GallaryPage/5.jpg";
const GallaryPageSection03 = () => {
return (
<div className='xs:px-[32px] lg:px-[120px] lg:mt-[150px] xs:mt-[60px]'>
    <div className="">
        <div>
            <div
                className="grid-col-1 text-red-600 block font-[Helvetica] md:text-[42px] text-[24px] font-bold lg:mb-[50px] xs:mb-[25px] lg:mb-[0px]">
                <span className="text-red-600">Photos</span>
            </div>
        </div>
    </div>
    <div className='xs:hidden md:flex flex-col lg:gap-[30px]'>
        <div className='grid grid-cols-2 lg:gap-[30px] xs:gap-[8px]'>
            <div>
                <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage01} alt="" width={100}
                    height={100} />
            </div>
            <div className='grid grid-cols-2 lg:gap-[30px] xs:gap-[8px]'>
                <div>
                    <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage02} alt="" width={100}
                        height={100} />
                </div>
                <div>
                    <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage03} alt="" width={100}
                        height={100} />
                </div>
                <div>
                    <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage04} alt="" width={100}
                        height={100} />
                </div>
                <div>
                    <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage05} alt="" width={100}
                        height={100} />
                </div>
                <div>
                    <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage01} alt="" width={100}
                        height={100} />
                </div>
                <div>
                    <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage01} alt="" width={100}
                        height={100} />
                </div>
            </div>
        </div>
        <div className='h-[300px] w-full'>
            <img className="h-full w-full object-cover rounded-[10px]" src={GallaryImage01} alt="" width={100}
                height={50} />
        </div>
    </div>
    <div className='xs:flex md:hidden flex-col gap-[10px]'>
        <div>
            <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage01} alt="" width={100}
                height={100} />
        </div>
        <div className='grid grid-cols-2 gap-[10px]'>
            <div>
                <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage02} alt="" width={100}
                    height={100} />
            </div>
            <div>
                <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage03} alt="" width={100}
                    height={100} />
            </div>
        </div>
        <div>
            <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage04} alt="" width={100}
                height={100} />
        </div>
    </div>
</div>
);
};

export default GallaryPageSection03;