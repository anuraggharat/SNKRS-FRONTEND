import React from 'react'
import {FaRegUser} from 'react-icons/fa'
import {BsFillHandbagFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <nav className="fixed z-20 bg-white  w-screen  flex flex-row justify-center">
      <div className=" mx-auto max-w-screen-xl  w-full  px-20 py-5   justify-between inline-flex items-center ">
        <div className="h-full">
          <Link to="/">
            <h1 className="text-2xl">SNKRS</h1>
          </Link>
        </div>
        <div className="w-1/2 ">
          <ul className="flex flex-row justify-around items-stretch">
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Sneakers</p>
            </li>
            <li>
              <p>Sale</p>
            </li>
            <li>
              <p>New Launches</p>
            </li>
          </ul>
        </div>
        <div className="w-100  flex flex-row align-middle content-center">
          <Link to={"/user/login"}>
            <button class="bg-gray-300 mr-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <FaRegUser className="mr-1" />
              <span>Login</span>
            </button>
          </Link>
          <Link to={"/user/cart"}>
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <BsFillHandbagFill className="mr-1" />
              <span>Bag</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
