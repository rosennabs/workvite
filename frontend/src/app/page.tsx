"use client"

import { useEffect, useState } from "react";
import axios from 'axios';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/hello')
      .then(res => setMessage(res.data.message));
  }, []);

  return <h1>{message || 'Loading...'}</h1>;
}
