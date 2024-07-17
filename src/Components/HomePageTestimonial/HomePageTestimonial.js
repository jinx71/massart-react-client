"use client";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePageTestimonial.css";
import Avatar from "../../Assets/Image/Homepage/Ellipse 115.png";
import TestimonialVideo from "../../Assets/Video/Header.mp4";
const testimonials = [
  {
    id: 1,
    name: "Sagnik Roy",
    title: "Founder & CEO",
    text: "The quality and variety of artwork available on Puja Art are impressive. It's my go-to platform for discovering new artists.",
    rating: 5,
    image: "../../Assets/Image/Homepage/Ellipse 115.png",
    video: "/images/Group .png",
  },
  {
    id: 2,
    name: "Amit Das",
    title: "Art Collector",
    text: "The quality and variety of artwork available on Puja Art are impressive. It's my go-to platform for discovering new artists.",
    rating: 5,
    image: "../../Assets/Image/Homepage/Ellipse 115.png",
    video: "/images/Group .png",
  },
  {
    id: 3,
    name: "Amit Das",
    title: "Art Collector",
    text: "The quality and variety of artwork available on Puja Art are impressive. It's my go-to platform for discovering new artists.",
    rating: 5,
    image: "../../Assets/Image/Homepage/Ellipse 115.png",
    video: "/images/Group .png",
  },
  // Add more items as needed
];

const HomePageTestimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bg-white overflow-hidden lg:mt-[150px] xs:mt-[60px]  lg:px-[120px] xs:px-[36px]">
     <div className="xs:px-[32px]flex flex-col justify-center lg:flex-row xs:mb-[25px] lg:mb-[50px]">
         <h1 className="xs:text-[24px] lg:text-[42px] leading-[3rem] w-full text-center  font-bold font-helvetica">
             Customer's {" "}
             <span className="text-red-600">Testimonial</span>
         </h1>

     </div>
     <div className="">
         <Slider {...settings}>
             {testimonials.map((testimonial) => (
             <div key={testimonial.id} className="flex justify-center h-[500px]">
                 <div className="rounded-lg border-2 bg-white max-w-sm h-[500px] flex flex-col justify-evenly">
                     <a href="#">
                         <video autoPlay loop muted className="rounded-[10px]  h-full w-full object-cover">
                             <source src={TestimonialVideo} type="video/mp4" />
                             Your browser does not support the video tag.
                         </video>
                     </a>
                     <div className="p-6">

                         <p className="text-gray-700 text-base mb-4">
                             {testimonial.text}
                         </p>
                         <div className="flex flex-row gap-[10px] justify-start items-center">
                             <img src={Avatar}></img>
                             <div className="">
                                 <h5 className="text-gray-900 text-sm font-medium ">{testimonial.name}</h5>
                                 <h6 className="text-gray-900 text-xs text-[10px] ">{testimonial.title}</h6>
                             </div>
                         </div>
                         <button type="button"
                             className=" inline-block px-6 py-2.5 mt-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Rating
                             : {testimonial.rating}</button>
                     </div>
                 </div>
             </div>
             ))}
         </Slider>
     </div>
 </div>
  );
};

export default HomePageTestimonials;
