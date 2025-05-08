"use client";
import React from "react";
import ContactHeader from "./ContactHeader";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="absolute inset-x-0 top-0 z-10">
      <ContactHeader />
      <Nav/>
    </div>
  );
}