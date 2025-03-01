import React, { useState } from 'react';
import MassArtLogo from "../../Assets/Image/MassArtLogo.png"
import { Link } from 'react-router-dom';
import { RiMenu3Line } from "react-icons/ri";
import { RxCaretDown } from "react-icons/rx";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import SocialIcons from '../SocialIcons/SocialIcons';
const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
setMenuOpen(!menuOpen);
let mobileDropdownMenu = document.getElementById("mobileDropdownMenu");
mobileDropdownMenu.classList.toggle("hidden");

};

return (
<div className="relative h-[100vh] text-white font-helvetica xs:mx[60px] lg:mx-[120px] pt-[55px]">
    {/* mobile */}
    <div className="xs:flex md:hidden justify-between items-center w-full flex-row text-[#ed2127]">
        
    <div className="">
            <Link to="/">
            <img src={MassArtLogo} alt="massart-logo" width={100} height={100} className="h-[49px] object-contain" />
            </Link>
        </div>
        <div className="dropdown px-[30px]" >
            <div tabIndex={0} role="button"
                className=" bg-transparent text-white  text-5xl"
                onClick={toggleMenu}>
                <RiMenu3Line />
            </div>
            <ul tabIndex={0}
                id="mobileDropdownMenu"
                className="hidden absolute menu menu-sm dropdown-content right-8 mt-3 z-10 p-2 shadow bg-[white] rounded-[5px] w-56">
                
                <li className="">
                    <Link to="/">home</Link>
                </li>
                <li className="">
                    <Link to="/about">about</Link>
                </li>
                <li className="">
                    <Link to="/concept">concept</Link>
                </li>
                <li className="">
                    <Link to="/preview-show-2023">preview show 2023</Link>
                </li>
                <li className="">
                    <Link to="/preview-show-2024">preview show 2024</Link>
                </li>
                <li className="">
                    <Link to="/preview-show-2025">preview show 2025</Link>
                </li>

                <li className="">
                    <Link to="/gallary">gallery</Link>
                </li>
                <li className="">
                <Link to="#">press</Link>
                </li>
                <li className="">
                    <Link to="/contact-us">Contact</Link>
                </li>
            </ul>
        </div>

        
    </div>

    <div className="xs:hidden md:flex flex-row justify-between items-center">
        <div className="">
            <Link to="/">
            <img src={MassArtLogo} alt="massart-logo" width={100} height={100} className="h-[49px] object-contain" />
            </Link>
        </div>
        <ul className="flex flex-row justify-end items-center gap-8">
            <li className="">
                <Link to="/home">home</Link>
            </li>
            <li className="">
                <Link to="/about">about</Link>
            </li>
            <li className="">
                <Link to="/concept">concept</Link>
            </li>
            <li className="">
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <MenuButton
                            className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2">
                            preview show
                            <RxCaretDown aria-hidden="true" className="-mr-1 h-5 w-5" />
                        </MenuButton>
                    </div>

                    <MenuItems transition
                        className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                        <div className="py-1">
                            <MenuItem>
                            <Link to="/preview-show-2023"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                                preview show 2023
                            </Link>
                            </MenuItem>
                            <MenuItem>
                            <Link to="/preview-show-2024"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                                preview show 2024
                            </Link>
                            </MenuItem>
                            <MenuItem>
                            <Link to="/preview-show-2025"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                                preview show 2025
                            </Link>
                            </MenuItem>
                            
                        </div>
                    </MenuItems>
                </Menu>
            </li>

            <li className="">
                <Link to="/gallary">gallery</Link>
            </li>

            <li className="">
                <Link to="/contact">contact us</Link>
            </li>
            <li className="">
                <Link to="/register"
                    className=" bg-buttonCustomColor rounded-[1000px]  px-[36px] py-[12px] leading-[24px]  text-[18px]">
                register
                </Link>
            </li>
        </ul>
    </div>

   
</div>
);
};

export default Navbar;