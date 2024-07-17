"use client";

import { FaLocationDot } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./HomePageMasterClass.css";
import MasterClassImage from "../../Assets/Image/Homepage/ExcitingSection.jpg";
const events = [
  {
    date: "20",
    month: "Jan",
    image: "../../Assets/Image/Homepage/ExcitingSection.jpg",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
  {
    date: "20",
    month: "Jan",
    image: "../../Assets/Image/Homepage/ExcitingSection.jpg",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
  {
    date: "20",
    month: "Jan",
    image: "../../Assets/Image/Homepage/ExcitingSection.jpg",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
  {
    date: "20",
    month: "Jan",
    image: "../../Assets/Image/Homepage/ExcitingSection.jpg",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
  {
    date: "20",
    month: "Jan",
    image: "../../Assets/Image/Homepage/ExcitingSection.jpg",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
];

const HomePageMasterClass = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="lg:mt-[150px] xs:mt-[60px] xs:mx-[32px] lg:mx-[120px]">
    <div
      className="flex flex-col lg:flex-row ">
      <h1 className="xs:text-[24px] xs:mb-[25px] lg:text-[42px] leading-[3rem] w-full font-bold font-helvetica">
        Explore and Join Our{" "}
        <span className="text-buttonCustomColor">Exciting Lineup</span>
      </h1>

      
    </div>
    
    <div className="overflow-hidden lg:mt-[36px] xs:gap-[10px] xs:px-[32px] lg:px-[0px]  w-full">
      <Slider {...settings} className="">
        {events.map((event, index) => (
          <div key={index} className="">
            <div className="relative group h-[450px] w-[380px] ">
              <img
                className="w-[100vw] rounded-lg h-full object-cover"
                src={MasterClassImage}
                alt={event.title}
                height={100}
                width={100}
              />

              <div
                className="absolute top-0 left-[32px] bg-buttonCustomColor
                 group-hover:opacity-100 opacity-0 duration-500"
              >
                <p className="text-[22px] xs:leading-[23px] font-bold font-helvetica text-white xs:px-[14px] xs:pt-[19px]">
                  {event.date}
                </p>
                <p className="xs:text-[14px] py-2 xs:leading-[23px] font-bold font-helvetica text-white xs:px-[14px] ">
                  {event.month}
                </p>
              </div>

              <div className="absolute bottom-[30px] left-[32px]  bg-opacity-75  june group-hover:opacity-100 opacity-0 duration-500">
                <p className="xs:text-[20px] xs:leading-[32px] font-bold font-helvetica xs:pb-[2px] text-[#ffffff]">
                  {event.title}
                </p>
                <p className="xs:text-[12px] pb-[11px] xs:leading-[13px] font-normal font-helvetica text-[#ffffff99]">
                  {event.author}
                </p>
                <p className="xs:text-[12px] xs:leading-[16px] font-helvetica font-normal flex items-center text-[#ffffff99] ">
                  <FaLocationDot className="mr-[9px] text-white" />
                  {event.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default HomePageMasterClass;
