import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'
import Img from '../Assets/Images/shoe1.webp'

export default function BagSidebar() {
  return (
    <div className="h-screen p-4 w-2/5 z-20 bg-slate-50 fixed top-0 right-0">
      <div className="flex   flex-col h-full  justify-between">
        <div className="inline-flex items-center flex-row justify-between">
          <h1 className="text-2xl">Shopping Cart</h1>
          <IoMdClose className="text-2xl" />
        </div>
        <div className="flex-1 mt-2">
          <div className="flex flex-row">
            <div className="flex flex-row">
              <img src={Img} className="w-24" />
              <div className='ml-2 flex flex-col'>
                <h1 className='text-xl'>Air Force 1</h1>
                <p>₹7,495/-</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-auto">
          <Link
            to={"/"}
            className="hover:bg-black mb-2 text-center hover:text-white border-2 border-black text-black font-bold py-2 px-4 rounded "
          >
            View cart
          </Link>
          <Link
            to={"/"}
            className="hover:bg-black text-center hover:text-white border-2 border-black text-black font-bold py-2 px-4 rounded "
          >
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
}
