import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import CartPageItem from "../../Components/RegularComponents/CartPageItem";
import { Link } from "react-router-dom";


const data = [
  "https://superkicks.in/wp-content/uploads/2022/06/1-32-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/1-32-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/2-25-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/3-25-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/1-31-850x850.jpg",
];

export default function Cart() {
 

  return (
    <div className="max-w-screen-2xl	mx-auto">
      <Header />
      <div className="min-h-100 pt-20 w-full">
        <div className="px-20 py-20 flex flex-row ">
          <div className="w-2/3">
            <h1 className="text-4xl font-medium">BAG</h1>
            <div className="w-100  mt-5">
              <CartPageItem data={data} />
            </div>
          </div>
          <div className="w-1/3 pl-10 ">
            <h1 className="text-4xl font-medium">SUMMARY</h1>

            <div className="shadow-lg p-5 mt-5 ">
              <div className="flex flex-row justify-between mb-5">
                <h2 className="font-medium">Subtotal</h2>
                <p>₹22,250/-</p>
              </div>
              <div className="flex flex-row justify-between mb-5">
                <h2 className="font-medium">Shipping</h2>
                <p>₹200/-</p>
              </div>
              <div className="flex flex-row justify-between mb-5 items-stretch">
                <input
                  class="bg-gray-200 appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  placeholder="Coupan Code"
                />
                <button className="hover:bg-black border-2 border-black bg-black text-white font-bold py-2 px-4">
                  Apply
                </button>
              </div>
              <hr className="mb-5" />
              <div className="flex flex-row justify-between mb-5">
                <h2 className="font-medium">Total</h2>
                <p>₹22,450/-</p>
              </div>
              <Link
                to={"/user/checkout"}
                className="hover:bg-white text-center hover:text-black bg-black border-2 w-full flex justify-center border-black text-white  font-bold py-2 px-4 rounded "
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
