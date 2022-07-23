import React from "react";
import HomeImage from "../Assets/Images/home-image.jpg";

import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import HorizontalList from "../Components/HorizontalList";
import { Link } from "react-router-dom";






export default function Home() {
  return (
    <>
      <div className="w-full">
        <img src={HomeImage} className="w-full" />
      </div>
      <HorizontalList />
      <div className="w-full gap-5 py-10 flex flex-row justify-between px-20">
        <div className="w-1/3 relative">
          <img src="https://images.pexels.com/photos/6229279/pexels-photo-6229279.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <div className="absolute bg-black px-10 py-2 top-5 left-5  text-white">
            <Link to="/products/sneakers">Men</Link>
          </div>
        </div>
        <div className="w-1/3 relative">
          <div className="absolute bg-black px-10 py-2 top-5 left-5  text-white">
            <Link to="/products/sneakers">Women</Link>
          </div>
          <img src="https://images.pexels.com/photos/1895943/pexels-photo-1895943.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </div>
        <div className="w-1/3 relative">
          <div className="absolute bg-black px-10 py-2 top-5 left-5  text-white">
            <Link to="/products/sneakers">Kids</Link>
          </div>
          <img src="https://images.pexels.com/photos/5560018/pexels-photo-5560018.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </div>
      </div>
    </>
  );
}
