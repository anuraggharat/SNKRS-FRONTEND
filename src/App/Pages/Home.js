import React from "react";
import HomeImage from "../Assets/Images/home-image.jpg";
import Shoe1 from "../Assets/Images/shoe1.webp";
import Shoe2 from "../Assets/Images/shoe2.jpg";
import Shoe3 from "../Assets/Images/shoe3.jpg";
import Shoe4 from "../Assets/Images/shoe4.jpg";
import Shoe5 from "../Assets/Images/shoe5.jpg";
import Shoe6 from "../Assets/Images/shoe6.jpg";

import CardItem from "../Components/CardItem";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";


var container = document.getElementById("container");
function scrollright(){
    container.scrollBy(300, 0);
}
function scrollleft() {
  container.scrollBy(-300, 0);
}



export default function Home() {
  return (
    <div className="w-100 bg-slate-50 min-h-screen relative">
      <nav className="w-screen bg-slate-50 px-20 py-5 flex flex-row  justify-between fixed">
        <div className="">
          <h1>LOGO</h1>
        </div>
        <div className="w-1/2 ">
          <ul className="flex flex-row justify-between">
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Sneakers</p>
            </li>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Home</p>
            </li>
          </ul>
        </div>
        <div>
          <h2>Account</h2>
        </div>
      </nav>
      <div className="w-100 ">
        <img src={HomeImage} className="w-100" />
      </div>
      <div className="w-100 py-20">
        <div className="px-20">
          <div className="mb-10 flex flex-row justify-between">
            <h2 className="text-3xl font-medium">Latest Relase</h2>
            <div>
              <button className="text-2xl px-2">
                <AiOutlineArrowLeft onClick={()=>scrollleft()} />
              </button>
              <button className="text-2xl px-2">
                <AiOutlineArrowRight onClick={()=>scrollright()} />
              </button>
            </div>
          </div>
          <div className="relative flex overflow-x-scroll hide-scroll-bar" id="container">
            <div className="flex flex-nowrap" >
              <CardItem item={{ id: 1, image: Shoe1 }} />
              <CardItem item={{ id: 1, image: Shoe2 }} />
              <CardItem item={{ id: 1, image: Shoe3 }} />
              <CardItem item={{ id: 1, image: Shoe4 }} />
              <CardItem item={{ id: 1, image: Shoe5 }} />
              <CardItem item={{ id: 1, image: Shoe6 }} />
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-black py-20 px-20">
        <h1 className="text-white">Created by Anurag</h1>
      </footer>
    </div>
  );
}
