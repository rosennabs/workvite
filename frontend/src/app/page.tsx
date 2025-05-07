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
    <div className="m-8">
      <Header />
    </div>
    
  )
}
