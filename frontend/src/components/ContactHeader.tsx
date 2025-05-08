
import React from "react";
import { ContactItem } from "./ContactItem";
import { MdOutlineMail, MdPhone, MdOutlineLocationOn, MdOutlineArrowDropDown } from "react-icons/md";
import { FaFacebookSquare, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";

export default function ContactHeader() {
  return (
    <div className="flex justify-between py-4 px-8 bg-[#262626] border-b-[0.5px] border-gray-300/30">
      <div className="flex gap-8 text-gray-400">
        <ContactItem icon={<MdOutlineMail />} text="needhelp@example.com" color="text-green-600" />
        <ContactItem icon={<MdPhone />} text="92 888 666 0000" color="text-green-600" />
        <ContactItem icon={<MdOutlineLocationOn />} text="Suite 20 Golden Street USA" color="text-green-600" />
      </div>

      <div className="flex gap-8">

        <div className="flex gap-4 text-gray-400">
          <ContactItem icon={<FaFacebookSquare />} />
          <ContactItem icon={<FaTwitter />} />
          <ContactItem icon={<FaPinterestP />} />
          <ContactItem icon={<FaInstagram />} />
        </div>

        <div className="flex gap-4 items-center">
          <img className="w-[19px] h-[19px]" src="/flag-1.png" alt="flag" />
          <div className="flex items-center text-gray-400">
            <span>English</span>
            <span className="text-2xl"><MdOutlineArrowDropDown /></span>
          </div>
        </div>
      </div>
    </div>
  );
}