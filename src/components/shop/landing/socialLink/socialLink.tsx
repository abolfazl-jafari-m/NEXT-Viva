import React from 'react';
import {FaInstagram, FaTelegram, FaWhatsapp} from "react-icons/fa6";

function SocialLink() {
    return (
        <div className={"absolute top-1/2 left-10 max-md:left-3 flex flex-col gap-5 text-white -translate-y-1/2"}>
            <FaInstagram />
            <FaTelegram />
            <FaWhatsapp />
        </div>
    );
}

export default SocialLink;