import React, { useState } from "react";
import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import CartPageItem from "../../Components/Common/CartPageItem";
import Modal from "../../Components/Common/Modal";

const data = [
  "https://superkicks.in/wp-content/uploads/2022/06/1-32-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/1-32-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/2-25-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/3-25-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/1-31-850x850.jpg",
];

export default function Checkout() {
  const [modal, setModal] = useState(false);

  return (
    <div className="max-w-screen-2xl	mx-auto relative">
      <Header />
      <div className="min-h-100 pt-20 w-full">
        <div className="px-20 py-20 flex flex-row ">
          <div className="w-2/3">
            <h1 className="text-4xl font-medium">Billing Details</h1>
            <div className="w-100  mt-5">
              <div className="flex flex-row flex-wrap">
                <div className="w-1/2 p-2">
                  <input
                    name="email"
                    className="block w-full text-gray-700 bg-gray-100 border-0  rounded py-4 px-4  my-3 leading-tight focus:outline-none focus:bg-gray-200"
                    type="password"
                    placeholder="Email Address"
                  />
                </div>
                <div className="w-1/2 p-2">
                  <input
                    name="text"
                    className="block w-full text-gray-700 bg-gray-100 border-0  rounded py-4 px-4  my-3 leading-tight focus:outline-none focus:bg-gray-200"
                    type="password"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="w-1/2 p-2">
                  <input
                    name="text"
                    className="block w-full text-gray-700 bg-gray-100 border-0  rounded py-4 px-4  my-3 leading-tight focus:outline-none focus:bg-gray-200"
                    type="password"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-1/2 p-2">
                  <input
                    name="text"
                    className="block w-full text-gray-700 bg-gray-100 border-0  rounded py-4 px-4  my-3 leading-tight focus:outline-none focus:bg-gray-200"
                    type="password"
                    placeholder="Last Name"
                  />
                </div>
                <h1 className="text-2xl font-medium">Address</h1>
                <div className="w-full p-2">
                  <textarea
                    name="text"
                    className="block w-full text-gray-700 bg-gray-100 border-0  rounded py-4 px-4  my-3 leading-tight focus:outline-none focus:bg-gray-200"
                    type="password"
                    rows={3}
                    placeholder="Full Address"
                  />
                </div>
                <div className="w-1/3 p-2">
                  <input
                    name="text"
                    className="block w-full text-gray-700 bg-gray-100 border-0  rounded py-4 px-4  my-3 leading-tight focus:outline-none focus:bg-gray-200"
                    type="text"
                    placeholder="Town"
                  />
                </div>
                <div className="w-1/3 p-2">
                  <input
                    name="text"
                    className="block w-full text-gray-700 bg-gray-100 border-0  rounded py-4 px-4  my-3 leading-tight focus:outline-none focus:bg-gray-200"
                    type="text"
                    placeholder="District"
                  />
                </div>
                <div className="w-1/3 p-2">
                  <input
                    name="text"
                    className="block w-full text-gray-700 bg-gray-100 border-0  rounded py-4 px-4  my-3 leading-tight focus:outline-none focus:bg-gray-200"
                    type="text"
                    placeholder="State"
                  />
                </div>
                <div className="w-1/2 p-2">
                  <input
                    name="text"
                    className="block w-full text-gray-700 bg-gray-100 border-0  rounded py-4 px-4  my-3 leading-tight focus:outline-none focus:bg-gray-200"
                    type="text"
                    placeholder="Pincode"
                  />
                </div>
                <div className="w-1/2 p-2">
                  <input
                    name="text"
                    className="block w-full text-gray-700 bg-gray-100 border-0  rounded py-4 px-4  my-3 leading-tight focus:outline-none focus:bg-gray-200"
                    type="text"
                    placeholder="Delivery Note"
                  />
                </div>
              </div>
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
              <button className="hover:bg-black border-2 border-black bg-black text-white font-bold py-2 px-4 rounded mt-2 w-full" onClick={()=>(setModal(!modal))}>
                Place Order
              </button>
            </div>
            <div className="shadow-lg p-5 mt-5 ">
              <h1 className="text-xl font-medium mb-4">
                Choose your Payment option
              </h1>
              <div className="flex flex-row justify-start gap-2 mb-1">
                <input type="radio" name="paymentmethod" />{" "}
                <p>Pay using Card</p>
              </div>
              <div className="flex flex-row justify-start gap-2  mb-1">
                <input type="radio" name="paymentmethod" /> <p>Pay using UPI</p>
              </div>
              <div className="flex flex-row justify-start gap-2  mb-1">
                <input type="radio" name="paymentmethod" />{" "}
                <p>Internet Banking</p>
              </div>
              <div className="flex flex-row justify-start gap-2  mb-1">
                <input type="radio" name="paymentmethod" checked />{" "}
                <p>Cash on Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}
