import React from 'react';
import { Link } from 'react-router-dom';

const NouFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat font-[Helvetica]"
        style={{
            backgroundImage: 'url("https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg")',
          }}
          >
  <div className="max-w-md mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
    <div className="text-9xl font-bold mb-4 text-red-600">404</div>
    <h1 className="text-4xl font-bold text-gray-800 mb-6">Oops! Page Not Found</h1>
    <p className="text-lg text-gray-600 mb-8">The page you're looking for seems to have gone on a little adventure. Don't
      worry, we'll help you find your way back home.</p>
      <Link to="/"
        className="bg-buttonCustomColor text-white rounded-[1000px]  px-[36px] py-[12px] leading-[24px]  text-[18px]">
        go to home
        </Link>
  </div>
</div>
    );
};

export default NouFound;