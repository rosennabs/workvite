import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function Nav() {
  return (
    <header className="border-b-[0.5px] border-gray-300/30">
      <nav className="flex justify-between items-center py-6 px-10">
      <img src="/logo_recvite.png"/>
      <div className="flex justify-between w-2/5">
        <span>Home</span>
        <span>Pages</span>
        <span>Our Solutions</span>
        <span>Elements</span>
        <span>Blog</span>
        <span>Contact</span>
      </div>
      <div className="flex gap-8 items-center">
        <span className="text-3xl"> <IoSearchOutline /> </span>
        <button className="px-8 py-4 text-xs font-bold bg-green-600">
          BOOK APPOINTMENT
        </button>
        </div>
      </nav>
</header>
  );
}