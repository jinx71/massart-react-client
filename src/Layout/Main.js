import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import HeroSection from '../Components/HeroSection/HeroSection';

const Main = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;