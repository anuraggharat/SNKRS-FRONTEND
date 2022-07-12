import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const data = [
  "https://superkicks.in/wp-content/uploads/2022/06/1-32-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/1-32-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/2-25-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/3-25-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/1-31-850x850.jpg",
];

export default function Cart() {
  const [cartShown, setCartShown] = useState(false);
  const [selected, setSelected] = useState(data[0]);

  console.log(cartShown);

  return (
    <div className="max-w-screen-2xl	mx-auto">
      <Header />
      <div className="min-h-100 pt-20 w-full">
        <div className="px-20 py-20 flex flex-row">
          <div className="w-2/3">
            <h1 className="text-4xl font-medium">BAG</h1>
            <div className="w-100  mt-5">
              <div className="flex mb-5 flex-row w-100 justify-between">
                <div className="flex flex-row w-100">
                  <img src={data[0]} className="w-32" />
                  <div className="flex flex-col px-2 justify-center">
                    <h1 className="font-medium text-xl">Nike Air Force 1</h1>
                    <p>Men's</p>
                    <p>White</p>
                    <p>9UK</p>
                  </div>
                </div>
                <div className="">Add more</div>
                <div className="flex flex-col p-2">
                  <h1 className="font-medium text-xl">₹7,895/-</h1>
                </div>
              </div>
              <div className="flex mb-2 flex-row w-100 justify-between">
                <div className="flex flex-row w-100">
                  <img src={data[0]} className="w-32" />
                  <div className="flex flex-col px-2 justify-center">
                    <h1 className="font-medium text-xl">Nike Air Force 1</h1>
                    <p>Men's</p>
                    <p>White</p>
                    <p>9UK</p>
                  </div>
                </div>
                <div className="flex flex-col p-2">
                  <h1 className="font-medium text-xl">₹7,895/-</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 pl-10">
            <h1 className="text-4xl font-medium">BAG</h1>

            <div className="shadow-lg p-5">
              <div className="flex flex-row justify-between mb-5">
                <h2 className="font-bold text-xl">Subtotal</h2>
                <p>₹15,970/-</p>
              </div>
              <div className="flex flex-row justify-between">
                <h2 className="font-bold text-xl">Shipping</h2>
                <p>₹200/-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
