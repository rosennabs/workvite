"use client";
import React from "react";
import ContactHeader from "./ContactHeader";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <ContactHeader />
      <Nav/>
    </header>
  );
}