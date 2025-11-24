import React from "react";
import NavBar from "@/components/NavBar";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";

export default function Home() {
  return (
    <>
      <NavBar />
      <AboutUs />
      <Clients />
      <Footer />
    </>
  );
}
