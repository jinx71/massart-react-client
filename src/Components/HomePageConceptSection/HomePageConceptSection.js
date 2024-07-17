import React from 'react';
import ConceptSection01 from '../../Assets/Image/Homepage/ConceptSection01.jpg';
import ConceptSection02 from '../../Assets/Image/Homepage/ConceptSection02.jpg';
import ConceptSection03 from '../../Assets/Image/Homepage/ConceptSection03.jpg';
import ConceptSection04 from '../../Assets/Image/Homepage/ConceptSection04.jpg';
import ConceptSection05 from '../../Assets/Image/Homepage/ConceptSection05.jpg';
const HomePageConceptSection = () => {
    return (
        <div className='lg:mt-[150px]  xs:mt-[60px] lg:px-[120px] xs:px-[32px]'>
              <div className="grid md:grid-cols-2  gap-6 items-center">
        {/* card1 */}
        <div 
        className="relative xs:h-[285px] md:h-[590px] rounded-md overflow-hidden group bg-no-repeat bg-cover bg-center"
        style={{backgroundImage: `url(${ConceptSection05})`}}
        >
          <div className="absolute inset-0   rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="absolute left-[25px] bottom-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-[24px] leading-[23px] font-helvetica font-bold text-[#FCFCFC]">
              Concept of Durga Puja Art
            </p>
            <div className="pt-[10px]">
              <p className="text-[14px] pr-[25%]  text-[#b8b4b4] font-normal font-helvetica">
                Durga Puja is technically West Bengal’s largest religious
                festival, centred on the goddess Durga, destroyer of the demon
                Mahishasura. But increasingly, Durga Puja is also the world’s
                largest publicly funded Art show.
              </p>
              <div className="pt-[10px]">
                <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center ">
          {/* card 2 */}
          <div className="relative h-[285px]  w-full group rounded-md overflow-hidden group  bg-no-repeat bg-cover bg-center"
          style={{backgroundImage: `url(${ConceptSection01})`}}>
          <div className="absolute inset-0   rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="absolute left-[25px] bottom-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-[24px] leading-[23px] font-helvetica font-bold text-[#FCFCFC]">
            Preview Show 2024
            </p>
            <div className="pt-[10px]">
              <p className="text-[14px] pr-[25%]  text-[#b8b4b4] font-normal font-helvetica">
              our preview show 2024 to be staged at a prominent kolkata venue...
              </p>
              <div className="pt-[10px]">
                <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
          {/* card 3 */}
          <div className="relative h-[285px]  w-full group rounded-md overflow-hidden group   bg-no-repeat bg-cover bg-center"
          style={{backgroundImage: `url(${ConceptSection04})`}}>
          <div className="absolute inset-0   rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="absolute left-[25px] bottom-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-[24px] leading-[23px] font-helvetica font-bold text-[#FCFCFC]">
            Preview Pass
            </p>
            <div className="pt-[10px]">
              <p className="text-[14px] pr-[25%]  text-[#b8b4b4] font-normal font-helvetica">
              the third edition of preview show of durga puja Art 2024 kolkata...
              </p>
              <div className="pt-[10px]">
                <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
          {/* card4 */}
          <div className="relative h-[285px]  w-full group rounded-md overflow-hidden group   bg-no-repeat bg-cover bg-center"
          style={{backgroundImage: `url(${ConceptSection03})`}}>
          <div className="absolute inset-0   rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="absolute left-[25px] bottom-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-[24px] leading-[23px] font-helvetica font-bold text-[#FCFCFC]">
            Nomination Process
            </p>
            <div className="pt-[10px]">
              <p className="text-[14px] pr-[25%]  text-[#b8b4b4] font-normal font-helvetica">
              our preview show 2024 to be staged at a prominent kolkata venue...
              </p>
              <div className="pt-[10px]">
                <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
          {/* card5 */}

          <div className="relative h-[285px]  w-full group rounded-md overflow-hidden group  bg-no-repeat bg-cover bg-center"
          style={{backgroundImage: `url(${ConceptSection04})`}}>
          <div className="absolute inset-0   rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="absolute left-[25px] bottom-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-[24px] leading-[23px] font-helvetica font-bold text-[#FCFCFC]">
            Hand in Hand
            </p>
            <div className="pt-[10px]">
              <p className="text-[14px] pr-[25%]  text-[#b8b4b4] font-normal font-helvetica">
              your participation will enable bengal Art, culture and herit...
              </p>
              <div className="pt-[10px]">
                <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
        </div>
    );
};

export default HomePageConceptSection;