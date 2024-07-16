import React from 'react';
import BritishCouncilLogo from '../../Assets/Image/BritishCouncilLogo.png';
import IndiaLogo from '../../Assets/Image/IndiaLogo.png';
import UnescoLogo from '../../Assets/Image/UnescoLogo.png';
const AgencyFooterLogos = () => {
    return (
        <div className="px-[32px] pt-[30px]">
      <div className="w-full grid grid-cols-3 gap-4 justify-between items-center">
        <div className="w-full h-full lg:p-6 flex justify-center items-center  hover:bg-EventPartner">
          <img
            className="object-cover"
            src={BritishCouncilLogo}
            alt="logo"
            width={300}
            height={300}
          />
        </div>

        <div className="w-full h-full lg:p-6 flex justify-center items-center  hover:bg-EventPartner">
          <img
            className="object-cover"
            src={UnescoLogo}
            alt="logo"
            width={300}
            height={300}
          />
        </div>

        <div className="w-full h-full lg:p-6 flex justify-center items-center hover:bg-EventPartner">
          <img
            className=" object-cover"
            src={IndiaLogo}
            alt="logo"
            width={300}
            height={300}
          />
        </div>
      </div>

      <hr className="bg-black my-[10px]" />

      <div className="grid grid-cols-3 gap-3 justify-between items-center">
        <div className="w-full h-full lg:p-6 flex justify-center items-center hover:bg-EventPartner">
          <img
            className="object-cover"
            src={BritishCouncilLogo}
            alt="logo"
            width={300}
            height={300}
          />
        </div>

        <div className="w-full h-full lg:p-6 flex justify-center items-center  hover:bg-EventPartner">
          <img
            className="object-cover"
            src={UnescoLogo}
            alt="logo"
            width={300}
            height={300}
          />
        </div>

        <div className="w-full h-full lg:p-6 flex justify-center items-center  hover:bg-EventPartner">
          <img
            className=" object-cover"
            src={IndiaLogo}
            alt="logo"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
    );
};

export default AgencyFooterLogos;