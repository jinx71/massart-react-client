import React, { useEffect, useState } from 'react';
import PreviewPage2023Section02Image01 from "../../Assets/Image/PreviewPage2023/PreviewPage2023Section02Image01.jpg";
import PreviewPage2023Section02Image02 from "../../Assets/Image/PreviewPage2023/PreviewPage2023Section02Image02.jpg";
import PreviewPage2023Section02Image03 from "../../Assets/Image/PreviewPage2023/PreviewPage2023Section02Image03.jpg";
import { useSwipeable } from 'react-swipeable';
import { Link } from 'react-router-dom';

const PreviewPage2023Section02 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      imageUrl: PreviewPage2023Section02Image01,
      title: "contemporary",
      readMore: "#",
    },
    {
      imageUrl: PreviewPage2023Section02Image02,
      title: "traditional",
      readMore: "#",
    },
    {
      imageUrl:PreviewPage2023Section02Image03,
      title: "bonedibari",
      readMore: "#",
    },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((currentSlide + 1) % slides.length),
    onSwipedRight: () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

    return (
        <div className='xs:mt-[60px] lg:mt-[150px] xs:px-[32px] lg:px-[120px]'>
            <div className="md:grid lg:grid-cols-2 grid-cols-1 lg:gap-[106px] md:gap-[20px] gap-7 mb-7 hidden">
        <div className="font-[Helvetica] lg:text-[42px] lgleading-[59px] md:text-[36px] md:leading-[46px] text-[24px] leading-[36px] font-bold">
          selected Art <span className="text-red-600"> <br className="md:block hidden" /> venue </span>
        </div>
        <div>
          <div className="md:text-[16px] md:leading-[24px] font-normal">
            <p>
            out of a pool of over 3000 durga puja organising applicants who are keen to be in the list, only 26 durga puja Art venues were selected for psdpa2023. among them 22 were contemporary, 2 traditional and 2 aristocrat household (bonedibari) puja Art venues. an exhibition ‘making of durga puja Art’ held in kolkata town hall, was an important venue to the durga puja Art lovers.
            </p>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-3 grid-cols-1 gap-5 hidden">
        <div className="relative group rounded-[20px] overflow-hidden">
          <img
            className="w-full h-auto"
            width={387}
            height={491}
            src={PreviewPage2023Section02Image01}
            alt=""
          />
          <div
            className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-5 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))",
            }}
          >
            <p className="text-[24px] leading-[32px] font-bold font-[Helvetica] mb-[10px]">
              contemporary
            </p>
            <div className="pt-[10px]">
              <Link to="#">
                <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                  read more
                </button>
                </Link>
              </div>
              
          </div>
        </div>

        <div className="relative group rounded-[20px] overflow-hidden">
          <img
            className="w-full h-auto"
            width={387}
            height={491}
            src={PreviewPage2023Section02Image02}
            alt=""
          />
          <div
            className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-5 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))",
            }}
          >
            <p className="text-[24px] leading-[32px] font-bold font-[Helvetica] mb-[10px]">
              traditional
            </p>
            <div className="pt-[10px]">
              <Link to="#">
                <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                  read more
                </button>
                </Link>
              </div>
          </div>
        </div>

        <div className="relative group rounded-[20px] overflow-hidden">
          <img
            className="w-full h-auto"
            width={387}
            height={491}
            src={PreviewPage2023Section02Image03}
            alt=""
          />
          <div
            className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-5 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))",
            }}
          >
            <p className="text-[24px] leading-[32px] font-bold font-[Helvetica] mb-[10px]">
            bonedibari
            </p>
            <div className="pt-[10px]">
              <Link to="#">
                <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                  read more
                </button>
                </Link>
              </div>
          </div>
        </div>
      </div>

      {/* show on mobile */}
      <div className="md:hidden block font-[Helvetica] md:text-[42px] text-[24px] font-bold mb-[25px]">
        selected Art <span className="text-red-600">venue</span>
      </div>

      <div className="relative w-full mb-[60px] md:hidden block" {...handlers}>
        <div className="relative h-64 overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="absolute w-full h-full transition-opacity duration-300 ease-in-out"
              style={{ opacity: index === currentSlide ? 1 : 0 }}
            >
              <img
                src={slide.imageUrl}
                alt=""
                width={100}
                height={100}
                className="w-full object-cover"/>
              <div
                className="absolute inset-0 bg-[rgbe 0 0 0 0] flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300 ease-in-out"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  background:
                    "linear-gradient(360deg, black, rgba(249, 0, 0, 0), rgba(249, 0, 0, 0), rgba(249, 0, 0, 0))",
                }}
              >
                <p className="text-[24px] leading-[23px] font-bold mb-2">
                  {slide.title}
                </p>
                <div className="pt-[10px]">
              <Link to={slide.readMore}>
                <button className="bg-buttonCustomColor text-white text-[14px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                  read more
                </button>
                </Link>
              </div>
              </div>
            </div>
          ))}
        </div>
        <div className="justify-center flex space-x-2 mt-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-black" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>

        </div>
    );
};

export default PreviewPage2023Section02;