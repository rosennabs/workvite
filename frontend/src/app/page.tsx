"use client";

import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "@/components/Header";


export default function Home() {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/hello`)
  //     .then(res => setMessage(res.data.message));
  // }, []);

  return (
   
    <div className="flex relative items-center">
      <img className="w-full h-full opacity-60 object-cover scale-145 py-42" src="/banner-1.jpg" alt="image of a corporate woman" />

      {/* gradient overlay: dark → transparent, left → right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

      <Header />
      <div className="absolute flex flex-col space-y-8 left-64 scale-125 w-[500px] z-20">
        <h1 className="text-white text-7xl font-bold leading-20 tracking-tight">The Right Candidate for your Buisness</h1>
        <p className="italic">There are many of passages of lorem Ipsum, but the majori have suffered alteration in some form.</p>
        <button className="px-12 py-6 w-64 text-xs font-bold bg-green-600">
          DISCOVER MORE
        </button>
      </div>
      
      
      </div>


    
  )
}
