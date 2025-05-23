"use client";

import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "@/components/Header";
import RenderResourceCards from "@/components/RenderResourceCards";
import RenderAbout from "@/components/RenderAbout";
import RenderHRServices from "@/components/RenderHRServices";
import RenderKPI from "@/components/RenderKPI";
import RenderProjectSection from "@/components/RenderProjectSection";
import { GiCheckMark } from "react-icons/gi";
import { CgQuote } from "react-icons/cg";






export default function Home() {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/hello`)
  //     .then(res => setMessage(res.data.message));
  // }, []);

  return (
    <div className="flex flex-col items-center pb-12">
      <div className="relative overflow-hidden">
        <img className="w-full block opacity-60 object-cover scale-145 py-42" src="/banner-1.jpg" alt="image of a corporate woman" />

        {/* gradient overlay: dark → transparent, left → right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

        <Header />

        <div className="absolute flex flex-col space-y-8 left-48 top-1/2 transform -translate-y-1/2 scale-125 w-[500px] z-20">
          <h1 className="text-white text-7xl font-bold leading-20 tracking-tight">The Right Candidate for your Buisness</h1>
          <p className="italic">There are many of passages of lorem Ipsum, but the majori have suffered alteration in some form.</p>
          <button className="px-12 py-6 w-64 text-xs font-bold bg-green-600">
            DISCOVER MORE
          </button>
        </div>
      </div>


      <RenderResourceCards />

      <RenderAbout />

      <RenderHRServices />

      <RenderKPI />

      <RenderProjectSection />

      <div className="relative flex items-center justify-between p-32 mb-28">
        <div className="w-1/2 -mr-32">
          <p className="text-green-600 font-bold mb-4">Staffing Partners</p>
          <h2 className="text-5xl font-bold leading-16 tracking-tight mb-8">We’re Here to Solve Recruitment Using Technology</h2>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 w-[215px] h-[245px] border-2 border-gray-400/20">
          <span className="text-green-600 text-5xl"><GiCheckMark/></span>
          <span className="text-5xl">2887</span>
          <span className="text-gray-500">Happy Customers</span>
        </div>

        <div className="flex flex-col w-1/3">
          <p className="text-gray-500">There are many variations passages of lorem ipsum but the maj alteration in some form, by rando mis words is noted.</p>
          <span className="mt-8 mb-2">Stuffing</span>
          <div className="bg-green-600 h-2 mb-6"></div>
          <span>Recruitment</span>
          <div className="bg-green-600 h-2 mt-2"></div>
        </div>
     
        
        <div className="absolute -bottom-95 grid grid-cols-3 gap-6 justify-items-center w-5/6">
          <div className="relative flex flex-col items-center bg-white text-center border-t-10 border-green-600 space-y-8 px-12 h-[404px] text-black">
            <span className="text-white bg-green-600 p-2 text-5xl"><CgQuote /></span>
            <p className="text-xl italic text-gray-500 leading-9">This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
            <span className="font-bold">Rogers White</span>
            <img className="absolute -bottom-12" src="/testimonial-1.png" />
          </div>
          <div className="relative flex flex-col items-center bg-white text-center border-t-10 border-green-600 space-y-8 px-12 h-[404px] text-black">
            <span className="text-white bg-green-600 p-2 text-5xl"><CgQuote /></span>
            <p className="text-xl italic text-gray-500 leading-9">This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
            <span className="font-bold">Mike Hardson</span>
            <img className="absolute -bottom-12" src="/testimonial-3.png" />
          </div>
          <div className="relative flex flex-col items-center bg-white text-center border-t-10 border-green-600 space-y-8 px-12 h-[404px] text-black">
            <span className="text-white bg-green-600 p-2 text-5xl"><CgQuote /></span>
            <p className="text-xl italic text-gray-500 leading-9">This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
            <span className="font-bold">Christine Eve</span>
            <img className="absolute -bottom-12" src="/testimonial-2.png" />
          </div>
          



        </div>

      </div>

      
      <div className="w-full bg-[#f6f6f6] h-[1000px]"></div>
    </div>

  );
}
