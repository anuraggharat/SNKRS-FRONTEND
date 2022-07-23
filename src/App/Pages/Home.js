import React from "react";
import HomeImage from "../Assets/Images/home-image.jpg";

import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import HorizontalList from "../Components/HorizontalList";






export default function Home() {
  return (
    <div className="w-100 bg-slate-50 min-h-screen relative">
      <Header />
      <div className="w-100 ">
        <img src={HomeImage} className="w-100" />
      </div>
      <HorizontalList />
     
      <Footer />
    </div>
  );
}
