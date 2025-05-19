"use client";

import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "@/components/Header";
import RenderResourceCards from "@/components/RenderResourceCards";
import RenderAbout from "@/components/RenderAbout";
import RenderHRServices from "@/components/RenderHRServices";
import { GiCheckMark } from "react-icons/gi";




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
      
      <div className="relative flex flex-col">
      
      <div className="flex justify-around bg-[#262626] w-full p-24 mb-38">
      
        <div className="w-2/5">
          <p className="text-green-600 font-bold mb-4">Learn About Agency</p>
          <h2 className="text-5xl font-bold leading-16 tracking-tight mb-8">We’re Reliable & Cost Efficient Recruitment Agency</h2>
          <button className="px-12 py-6 w-64 text-xs font-bold bg-green-600">
            DISCOVER MORE
          </button>
        </div>

        <div className="flex flex-col w-1/2">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center space-y-3">
              <span>For Employers</span>
              <img src="/shape-3.png" alt="A down line arrow" />
            </div>
            <div className="flex flex-col items-center space-y-4 w-[150px]">
              <span>For Employees</span>
              <div className="bg-white h-0.5 w-full"></div>
            </div>
          </div>

          <div className="flex gap-8 mt-12">
            <img className="h-[237px]" src="/agency-1.jpg" alt="Photo of corporate men" />
            <div className="text-gray-400 leading-8">
              <p className="w-3/4">There are many simply free text available variations of passages of but the majority have in some.</p>

              <div className="flex items-center gap-4 mt-12">
                <span className="text-green-600"><GiCheckMark /></span>
                <p>Support on hiring employeers</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-green-600"><GiCheckMark /></span>
                <p>Get exceptional service for growth</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-green-600"><GiCheckMark /></span>
                <p>Outsourced consulting business</p>
              </div>
      
            </div>
          </div>
        </div>
 
        </div>
        
        <div className="absolute -bottom-32 z-10 justify-center bg-white mx-24 h-[257px]">
          <div className="bg-green-600 h-3"></div>
          <div className="grid grid-cols-4 ">
            <div className="flex flex-col items-center text-center border-r border-r-gray-200 space-y-4 py-12 px-20 text-black">
            <span className="text-green-600 text-5xl"><GiCheckMark /></span>
            <span className="text-5xl">8080</span>
            <p>Project Completed</p>
            </div>
            <div className="flex flex-col items-center text-center border-r border-r-gray-200 space-y-4 py-12 px-20 text-black">
            <span className="text-green-600 text-5xl"><GiCheckMark /></span>
            <span className="text-5xl">697</span>
              <p>Employer Solutions</p>
            </div>
            <div className="flex flex-col items-center text-center border-r border-r-gray-200 space-y-4 py-12 px-20 text-black">
            <span className="text-green-600 text-5xl"><GiCheckMark /></span>
            <span className="text-5xl">440</span>
              <p>Job Seekers</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 py-12 px-20 text-black">
            <span className="text-green-600 text-5xl"><GiCheckMark /></span>
            <span className="text-5xl">2887</span>
              <p>Happy Customers</p>
            </div>
           
          </div>
        </div>
      </div>

      <div className="bg-[#f6f6f6] w-full min-h-[1000px]">
        <p>Hold</p>
      </div>

    </div>

  );
}
