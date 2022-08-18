import React from "react";
import HomeImage from "../Assets/Images/home-image.jpg";
import HorizontalList from "../Components/HorizontalList";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="w-full  px-5 md:px-20 pt-20 md:pt-20">
        <img
          src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60"
          className="w-full"
        />
      </div>
      <HorizontalList />
      <div className="w-full py-10 flex  md:flex-row flex-wrap justify-between px-5 md:px-20">
        <div className="w-100 md:w-1/3 relative p-1">
          <img src="https://images.pexels.com/photos/6229279/pexels-photo-6229279.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <div className="absolute bg-black px-10 py-2 top-5 left-5  text-white">
            <Link to="/products/sneakers">Men</Link>
          </div>
        </div>
        <div className="w-100 md:w-1/3  relative p-1">
          <div className="absolute bg-black px-10 py-2 top-5 left-5  text-white">
            <Link to="/products/sneakers">Women</Link>
          </div>
          <img src="https://images.pexels.com/photos/1895943/pexels-photo-1895943.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </div>
        <div className="w-100 md:w-1/3 relative p-1">
          <div className="absolute bg-black px-10 py-2 top-5 left-5  text-white">
            <Link to="/products/sneakers">Kids</Link>
          </div>
          <img src="https://images.pexels.com/photos/5560018/pexels-photo-5560018.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </div>
      </div>
    </>
  );
}
