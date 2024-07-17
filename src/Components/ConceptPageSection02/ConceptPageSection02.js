import React from 'react';
import ConceptPageSection02Image01 from '../../Assets/Image/ConceptPage/ConceptPageSection02Image01.jpg';
import ConceptPageSection02Image02 from '../../Assets/Image/ConceptPage/ConceptPageSection02Image02.jpg';
import ConceptPageSection02Image03 from '../../Assets/Image/ConceptPage/ConceptPageSection02Image03.jpg';

const ConceptPageSection02 = () => {
    return (
        <div className="grid grid-flow-col auto-cols-max gap-1 overflow-x-auto no-scrollbar lg:flex lg:justify-between  lg:mt-[150px] xs:mt-[60px] lg:px-[120px] xs:px-[32px]">
         
        <div className="relative group rounded-lg overflow-hidden flex duration-150 h-[500px]">
          <img
            className=""
            width={398}
            height={249}
            src= {ConceptPageSection02Image01}
            alt=""
          />
          <div className="hidden absolute text-[12px] top-0 bottom-0 left-0 right-0 group-hover:flex flex-col justify-end p-6 text-white">
            <p className="text-[24px] leading-[25px] font-[Helvetica] mb-[10px]">
              contemporary durga puja Art
            </p>
            <div className="pt-[0px]">
              <div className="pt-[10px]">
                <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                  read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group rounded-lg overflow-hidden justify-center flex">
          <img
            className=""
            width={398}
            height={249}
            src={ConceptPageSection02Image02}
            alt=""
          />
          <div className="hidden absolute text-[12px] top-0 bottom-0 left-0 right-0 group-hover:flex flex-col justify-end p-6 text-white">
            <p className="text-[24px] leading-[25px] font-[Helvetica] mb-[10px]">
            traditional durga puja Art
            </p>
            <div className="pt-[0px]">
              
              <div className="pt-[10px]">
                <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                  read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group rounded-lg overflow-hidden justify-center flex">
          <img
            className=""
            width={398}
            height={249}
            src={ConceptPageSection02Image03}
            alt=""
          />
          <div className="hidden absolute text-[24px] top-0 bottom-0 left-0 right-0 group-hover:flex flex-col justify-end p-6 text-white">
            <p className="text-[24px] leading-[25px] font-[Helvetica] mb-[10px]">
            bonedi bari durga puja Art
            </p>
            <div className="pt-[0px]">
              
              <div className="pt-[10px]">
                <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                  read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ConceptPageSection02;