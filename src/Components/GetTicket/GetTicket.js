import React, { useState } from 'react';

const GetTicket = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
    setIsOpen(!isOpen);
  };


    return (
        <div className="relative grid md:grid-cols-3 grid-cols-1 p-[33px] md:py-[75px] py-[18px] items-center">
          <div className="col-span-2 lg:mx-[150px] text-white">
            <span className="text-buttonCustomColor md:text-[42px] md:leading-[56px] text-[24px] leading-[36px] font-bold">ticket <span className="text-white">options will be available</span></span>
            <div className="md:mt-[15px] mt-[5px] md:text-[18px] md:leading-[30px] text-[13px] leading-[22px] text-white">
              ticket options will be available soon. more ticket options including student concession are available. please Call +91 8420460550
            </div>
          </div>
          <div className="col-span-1 md:text-center text-left leading-[0px] mt-[23px] mb-[18px]">
            <button onClick={toggleModal} className="md:w-[173px] md:h-[48px] w-[92px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white">
              get ticket
            </button>

          </div>
          {isOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-[#000] bg-opacity-70"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative shadow">

              <div className="md:p-5 p-[20px] bg-[#D9D9D9] rounded-[10px]">

                <div className="font-[Helvetica] md:text-[42px] md:leading-[59px] text-[24px] leading-[33px] font-bold mb-[20px]">
                  <span className="text-red-600">ticket </span> options will be available soon.
                </div>
                <p className='md:text-[18px] md:leading-[30px] text-[13px] leading-[20px] mb-[27px]'>more ticket options including student concession are available. please call +91 8420460550</p>
                <div className='leading-[0px]'>   <button
                  type="button"
                  className="md:w-[97px] md:h-[48px] w-[39px] h-[22px] border-2 rounded-full md:text-[18px] md:leading-[24px] text-[12px] leading-[16px] border-black hover:bg-red-600 hover:border-buttonCustomColor hover:text-white delay-150"
                  onClick={toggleModal}
                >
                  Ok
                </button></div>
              </div>

            </div>
          </div>
        </div>
      )}
        </div>
    );
};

export default GetTicket;