import React from 'react';
import AgencyFooterLogos from '../AgecncyFooterLogos/AgencyFooterLogos';
import MassAartLogo from '../../Assets/Image/MassArtLogo.png';
import { Link } from 'react-router-dom';
import { LuSend } from "react-icons/lu";
const Footer = () => {
    return (
        <>
      <AgencyFooterLogos></AgencyFooterLogos>
      <footer className="bg-footerColor text-white  xs:hidden lg:block">
        <div className="mx-[32px]">

          <div className="lg:grid lg:grid-cols-4 lg:gap-16 xs:flex xs:flex-col" >

          <div className="flex flex-col lg:pt-16 xs:pt-8">
            <div className="grow-0">
            <img
              className=" object-cover"
              src={MassAartLogo}
              height={100}
              width={100}
              alt=""
            />
            </div>
              <div className="w-full grow">
              <p className="capitalize text-[12px] p-2 leading-10 text-justify">A non-profit organization conceived in june 2022 with the
              objective of promoting Art and culture of bengal.</p>
              </div>
            </div>


            <div className="flex flex-col lg:pt-16 xs:pt-8">
            <div className="grow-0">
            <h6 className="font-helvetica font-bold text-white xs:text-[24px]">
                  Navigation
                </h6>
            </div>
            <nav>
                
                 <Link  to='/'>
                  <p className="text-[18px] leading-[64px]  font-helvetica link-hover">
                  Home
                </p>
                 </Link>
               
                <Link  to='/about'>
                  <p className="text-[18px] leading-[64px]  font-helvetica link-hover">
                  About Us
                </p>
                </Link>
              

               <Link  to='/concept'>
                <p className="text-[18px] leading-[64px]  font-helvetica link-hover">
                  Concept
                </p>
               </Link>
               
              </nav>
            </div>

            <div className="flex flex-col lg:pt-16 xs:pt-8">
            <div className="grow-0">
            <h6 className=" font-helvetica font-bold text-white xs:text-[24px]">
                  Learn More
                </h6>
            </div>
            <nav>
                
            <Link  to='/terms-of-use'>
                 <p className="text-[18px] leading-[64px]  font-helvetica link-hover">
                  Terms Of Use
                </p>
                </Link>
                <Link  to='/privacy-policy'>
                 <p className="text-[18px] leading-[64px]  font-helvetica link-hover">
                  Privacy Policy
                </p>
                </Link>
                <Link  to='/faq'>
                 <p className="text-[18px] leading-[64px]  font-helvetica link-hover">
                  FAQ
                </p>
                </Link>
               
              </nav>
            </div>

            <div className="flex flex-col lg:pt-16 xs:pt-8">
            <div className="grow-0">
            <h6 className="font-helvetica font-bold text-white xs:text-[24px]">
                  Newsletter
                </h6>
            </div>
            <form>
                
                <p className="capitalize text-[18px] leading-10 text-justify">
                  Don't miss the latest information on this platform
                </p>
                <fieldset className="form-control xs:my-8">
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Email address"
                      className="w-full h-[30px] input input-bordered xs:text-[12px] xs:leading-[20px] font-normal bg-emailColor font-helvetica rounded-none"
                    />
                    <button className="bg-buttonCustomColor w-[40px] h-[30px] flex items-center justify-center p-[5px] rounded-none">
                      <LuSend size={14} className="text-white" />
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
            
          </div>

        </div>
        <hr class="h-px  bg-white"></hr>
        <nav>
                <p className="text-center  p-4 text-[18px] leading-[64px]  font-helvetica ">
                  Copyright © 2024 massArt, Designed & Developed Ethically by <span> </span>
                  <a to="https://www.ethicalden.com/" target="_blank" className="link-hover">
                    Ethical Den
                  </a>
                </p>
              </nav>
      </footer>
      <footer className="bg-footerColor text-white  lg:hidden block">
        <div className="mx-[32px]">

          <div className="" >

          <div className="flex flex-col lg:pt-16 xs:pt-8">
            <div className="grow-0">
            <img
              className=" object-cover"
              src={MassAartLogo}
              height={100}
              width={100}
              alt=""
            />
            </div>
              <div className="w-full grow">
              <p className="capitalize text-[12px] leading-8 pt-[10px] text-justify">A non-profit organization conceived in june 2022 with the
              objective of promoting Art and culture of bengal.</p>
              </div>
            </div>


            <div className="flex flex-col lg:pt-16 xs:pt-[20px]">
            <div className="grow-0">
            <h6 className="font-helvetica font-bold text-white xs:text-[16px]">
                  Navigation
                </h6>
            </div>
            <nav>
                
                 <Link  to='/'>
                  <p className="text-[12px] leading-8   font-helvetica link-hover">
                  Home
                </p>
                 </Link>
               
                <Link  to='/about'>
                  <p className="text-[12px] leading-8   font-helvetica link-hover">
                  About Us
                </p>
                </Link>
              

               <Link  to='/concept'>
                <p className="text-[12px] leading-8  font-helvetica link-hover">
                  Concept
                </p>
               </Link>
               
              </nav>
            </div>

            <div className="flex flex-col lg:pt-16 xs:pt-[20px]">
            <div className="grow-0">
            <h6 className=" font-helvetica font-bold text-white xs:text-[16px]">
                  Learn More
                </h6>
            </div>
            <nav>
                
            <Link  to='/terms-of-use'>
                 <p className="text-[12px] leading-8   font-helvetica link-hover">
                  Terms Of Use
                </p>
                </Link>
                <Link  to='/privacy-policy'>
                 <p className="text-[12px] leading-8   font-helvetica link-hover">
                  Privacy Policy
                </p>
                </Link>
                <Link  to='/faq'>
                 <p className="text-[12px] leading-8  font-helvetica link-hover">
                  FAQ
                </p>
                </Link>
                
              </nav>
            </div>

            <div className="flex flex-col lg:pt-16 xs:pt-[20px]">
            <div className="grow-0">
            <h6 className="font-helvetica font-bold text-white xs:text-[16px]">
                  Newsletter
                </h6>
            </div>
            <form>
                
                <p className="capitalize text-[12px] leading-8 text-justify">
                  Don't miss the latest information on this platform
                </p>
                <fieldset className="form-control xs:my-8">
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Email address"
                      className="w-full h-[30px] input input-bordered xs:text-[12px] xs:leading-[20px] font-normal bg-emailColor font-helvetica rounded-none"
                    />
                    <button className="bg-buttonCustomColor w-[40px] h-[30px] flex items-center justify-center p-[5px] rounded-none">
                      <LuSend size={14} className="text-white" />
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
            
          </div>

        </div>
        <hr class="h-px  bg-white"></hr>
        <nav>
                <p className="pt-[10px] text-[12px] leading-8  font-helvetica text-center">
                  Copyright © 2024 massArt, Designed & Developed Ethically by <span> </span>
                  <a to="https://www.ethicalden.com/" target="_blank" className="link-hover">
                    Ethical Den
                  </a>
                </p>
              </nav>
      </footer>
    </>
    );
};

export default Footer;