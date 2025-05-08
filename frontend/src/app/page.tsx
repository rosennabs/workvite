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
    <div className="relative">
      <img className="opacity-60 object-cover scale-145 py-42" src="/banner-1.jpg" alt="image of a corporate woman" />

      {/* gradient overlay: dark → transparent, left → right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

      <Header />
      
    </div>
    
  )
}
