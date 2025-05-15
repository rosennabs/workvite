"use client";

import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "@/components/Header";
import { RiDoubleQuotesR } from "react-icons/ri";
import { AiOutlineFileSearch } from "react-icons/ai";



interface MenuItem {
  icon: string,
  heading: string,
  image: string
}
const menuItems: MenuItem[] = [
  {
  icon: "/globe.svg",
  heading: "Leadership Training",
  image: "/feature-1.jpg"
  },
  {
    icon: "/globe.svg",
    heading: "Improving Resources",
    image: "/feature-2.jpg"
  },
  {
    icon: "/globe.svg",
    heading: "Recruitement Solutions",
    image: "/feature-3.jpg"
  }
]

export default function Home() {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/hello`)
  //     .then(res => setMessage(res.data.message));
  // }, []);

  return (
    <div className="flex flex-col items-center">
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

      <div className="relative flex justify-center bg-[#f6f6f6] text-black w-full min-h-[586px] px-24">

        <div className="grid grid-cols-3 gap-6 justify-items-center">
          {menuItems.map((item, index) => (
            <div key={index}
              className="flex flex-col justify-center items-center bg-white w-[370px] h-[466px] p-8 space-y-8">
              <img className="w-[65px]" src={item.icon} />
              <h2 className="text-4xl font-bold text-center"> {item.heading} </h2>
              <img src={item.image} />
            </div>
          ))}        
        </div>

        <div className="absolute flex justify-center -bottom-15 z-10">
          
          <p className="relative border-2 border-green-600 bg-white italic text-xl py-8 pl-32 pr-8 w-[930px]">
            Train people quickly well with quality business. So they highly efficient manufactured products. We can help you build.
          </p>
          <div className="absolute left-0 flex justify-center items-center text-3xl text-white bg-green-600 p-4 w-[65px] h-[60px]">
            <RiDoubleQuotesR />
          </div>
        </div>

      </div>

      <div className="flex py-[180px] bg-white w-full">
        
        {/* Icon */}
        <div className="flex flex-col items-center justify-center h-[200px] w-[180px] ml-2 space-y-4 text-6xl bg-green-600">
          <AiOutlineFileSearch />
          <span className="text-center font-semibold text-lg">Find Perfect Candidate</span>
        </div>
        
        {/* Images */}
        <div className="relative">
          <img className="h-[584px]" src="/about-1.jpg" alt="Image of workers" />
          <img className="absolute -right-4 -bottom-12 bg-white pt-4 pl-4 z-10 w-[350px] h-[331px]" src="/about-2.jpg" alt="Image of workers" />
          <div className="h-3 mt-6 bg-green-600"></div>

        </div>
       
        {/* Welcome to Agency paragraph */}
        <div className="text-black w-2/5 ml-14">
          <p className="text-green-600 font-bold mb-4">Welcome to Agency</p>
          <h2 className="text-5xl font-bold leading-16 tracking-tight mb-8">Best Quality Recruitment Staffing Agency</h2>
          <p className="text-gray-500 text-xl">Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm andhn.</p>

          <div className="flex mt-12 pb-12 border-b-[0.5px] border-gray-300/70">
            <div className="flex flex-col">
              <div className="font-bold mb-4">
                <span className="text-green-600">01 – </span>
                <span>Strategic Partners</span>
              </div>
              <p>Lorem ipsum dolor sited is amet consectetur notted.</p>
            </div>

            <div className="flex flex-col">
              <div className="font-bold mb-4">
                <span className="text-green-600">02 – </span>
                <span>Sourcing the Best</span>
              </div>
              <p>Lorem ipsum dolor sited is amet consectetur notted.</p>
            </div>
            
          </div>

          <div className="flex items-center justify-between mt-14">
            <img className="border-2 rounded-full border-green-600  p-2" src="/author-1.png" alt="Headshot of a man in suit"/>
            <div className="flex flex-col">
              <img src="/signature-1.png" alt="signature"/>
              <span>CEO & CO Founder</span>
            </div>
            <div className="flex items-center justify-center bg-white border-2 border-green-600 w-[230px] h-[128px] py-4 px-2">
              <div className="flex items-center justify-center space-x-4 w-[206px] h-[104px] bg-gray-100">
                <span className="text-5xl font-semi-bold">38</span>
                <span className="w-1/2 leading-5">Years of Experience</span>
              </div>
            </div>
          </div>

        </div>
        
        
      </div>

      </div>
    
  )
}
