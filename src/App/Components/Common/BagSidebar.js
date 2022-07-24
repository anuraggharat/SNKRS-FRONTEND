import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'
import {MdDelete} from 'react-icons/md'
import Img from '../../Assets/Images/shoe1.webp'
import CartListItem from './CartListItem'

export default function BagSidebar({ setCartShown, cartShown }) {
  return (
    <div
      className={
        cartShown
          ? "h-screen p-4 w-3/4 md:w-1/4 z-20 ml-0 bg-white shadow-lg fixed top-0 right-0 transition-all duration-900	ease-in"
          : "hidden"
      }
    >
      <div className="flex   flex-col h-full  justify-between">
        <div className="inline-flex items-center flex-row justify-between">
          <h1 className="text-2xl">Shopping Cart</h1>
          <IoMdClose
            className="text-2xl"
            onClick={() => setCartShown(!cartShown)}
          />
        </div>
        <div className="flex-1 mt-5 overflow-y-auto">
          <CartListItem img={Img} />
        </div>

        <div className="flex flex-col mt-auto">
          <Link
            to={"/user/cart"}
            className="hover:bg-black mb-2 text-center hover:text-white border-2 border-black text-black font-bold py-2 px-4 rounded "
          >
            View cart
          </Link>
          <Link
            to={"/user/checkout"}
            className="hover:bg-black text-center hover:text-white border-2 border-black text-black font-bold py-2 px-4 rounded "
          >
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
}
