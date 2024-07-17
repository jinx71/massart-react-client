import React from 'react';
import GallaryImage01 from "../../Assets/Image/GallaryPage/1.jpg";
import GallaryImage02 from "../../Assets/Image/GallaryPage/2.jpg";
import GallaryImage03 from "../../Assets/Image/GallaryPage/3.jpg";
import GallaryImage04 from "../../Assets/Image/GallaryPage/4.jpg";
import GallaryImage05 from "../../Assets/Image/GallaryPage/5.jpg";
const GallaryGrid = () => {
return (
<>
<div className='xs:hidden lg:block'>
    <div className='lg:grid lg:grid-cols-2 lg:gap-[30px]'>
        {/* Gallary Grid First Column */}
        <div className='flex flex-col gap-[30px]'>
            <div>
                <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage01} alt="" width={100} height={100} />
            </div>
            <div className='grid grid-cols-2 gap-[30px]'>
                <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage02} alt="" width={100} height={100} />
                <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage03} alt="" width={100} height={100} />
            </div>
        </div>
        {/* Gallary Grid Second Column */}
        <div>
            <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage04} alt="" width={100} height={100} />
        </div>
    </div>
</div>

<div className='xs:block md:hidden'>
    <div className='flex flex-col gap-[8px]'>

        {/* Gallary Grid First Row */}
<div className=''>
            
                <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage01} alt="" width={100} height={100} />
                
        </div>
        {/* Gallary Grid Second Row */}
        <div className='grid grid-cols-2 gap-[8px]'>
            
                <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage02} alt="" width={100} height={100} />
                <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage03} alt="" width={100} height={100} />
          
                <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage04} alt="" width={100} height={100} />
                <img className=" h-full w-full object-cover rounded-[10px]" src={GallaryImage05} alt="" width={100} height={100} />
            
        </div>
        
    </div>
</div>
</>
);
};

export default GallaryGrid;