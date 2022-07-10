import React from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header'
import HorizontalList from '../Components/HorizontalList';

export default function Item() {
  return (
    <div>
      <Header />
      <div className="px-20 flex flex-row pt-32">
        <div className="w-1/2 flex flex-row">
          <div className="w-1/5 p-1 flex flex-col justify-between">
            <img src="https://superkicks.in/wp-content/uploads/2022/06/1-32-850x850.jpg" />
            <img src="https://superkicks.in/wp-content/uploads/2022/06/2-25-850x850.jpg" />
            <img src="https://superkicks.in/wp-content/uploads/2022/06/3-25-850x850.jpg" />
            <img src="https://superkicks.in/wp-content/uploads/2022/06/1-31-850x850.jpg" />
          </div>
          <div className="w-4/5 p-1">
            <img src="https://superkicks.in/wp-content/uploads/2022/06/1-32-850x850.jpg" />
          </div>
        </div>
        <div className="w-1/2 pt-5 px-10">
          <h2>adidas originals</h2>
          <h1 className="text-3xl font-bold">
            OZELIA ‘CRYSTAL WHITE / CLOUD WHITE’
          </h1>
          <h4 className="my-2 text-xl font-medium">₹22,250/-</h4>
          <p className="mt-2 text-gray-700">
            The radiance lives on in the Nike Air Force 1 '07, the b-ball OG
            that puts a fresh spin on what you know best: durably stitched
            overlays, clean finishes and the perfect amount of flash to make you
            shine.
          </p>
          <h3 className="mt-3 text-xl font-medium mb-2">Available Sizes</h3>
          <div>
            <button className="hover:bg-black bg-slate-800 text-white font-bold py-2 px-4 rounded mr-2">
              6 UK
            </button>
            <button className="hover:bg-black bg-slate-800 text-white font-bold py-2 px-4 rounded mr-2">
              7 UK
            </button>
            <button className="hover:bg-black bg-slate-800 text-white font-bold py-2 px-4 rounded mr-2">
              8 UK
            </button>
            <button className="hover:bg-black bg-slate-800 text-white font-bold py-2 px-4 rounded mr-2">
              9 UK
            </button>
          </div>
          <div className="mt-4 flex flex-col">
            <button className="hover:bg-black  hover:text-white border-2 border-black text-black font-bold py-2 px-4 rounded ">
              Add to Bag
            </button>
            <button className="hover:bg-black border-2 border-black bg-black text-white font-bold py-2 px-4 rounded mt-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <HorizontalList text="Similar Items" />
      </div>
      <div>
        <img src="https://media.gq.com/photos/60da019bab6b8cc6e9d2c96c/64:25/w_4224,h_1650,c_limit/GettyImages-1325229940.jpg" />
      </div>
    
      <Footer />
    </div>
  );
}