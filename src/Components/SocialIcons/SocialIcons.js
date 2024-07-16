import React from 'react';
import { CiFacebook } from "react-icons/ci";
import {
FaInstagram,
FaLinkedinIn,
FaPinterest,
FaWhatsapp,
FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const SocialIcons = () => {
return (
<div className="absolute bottom-0 left-0 w-full grid justify-center text-black font-helvetica h-[450px] bg-gradient-to-b from-[#f2f3f300] to-[#121617]">
    <div className="flex items-end justify-center pb-8">
        <div className="flex space-x-[10px] text-white pt-[39px] text-[24px] justify-center items-end">

            <a href="https://www.facebook.com/durgapujamassart/" passHref={true} target={"_blank"}rel={"noreferrer"}>
                <CiFacebook />
            </a>

            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fdurgapujaart" passHref={true}
                target={"_blank"}rel={"noreferrer"}>
                <FaXTwitter />
            </a>

            <a href="https://www.instagram.com/durgapujamassart/" passHref={true} target={"_blank"}rel={"noreferrer"}>
                <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UC6juIMK3-WVjIAljEmTw8eA" passHref={true}
                target={"_blank"}rel={"noreferrer"}>
                <FaYoutube />
            </a>
        </div>
    </div>
</div>
);
};

export default SocialIcons;