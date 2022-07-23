import React from 'react'
import {FaRegUser} from 'react-icons/fa'
import {BsFillHandbagFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import ButtonPrimary from '../Common/ButtonPrimary';

export default function Header() {
  
  return (
    <nav className="fixed z-20 bg-white  w-screen  flex flex-row justify-center">
      <div className="flex mx-auto max-w-screen-xl w-full  px-20 py-5  items-stretch">
        <div className="h-full w-1/4">
          <Link to="/">
            <h1 className="text-2xl">SNKRS</h1>
          </Link>
        </div>
        <div className="w-1/2">
          <ul className="flex flex-row justify-evenly items-center h-full">
            <li>
              <p>Home</p>
            </li>
            <li>
              <Link to="/products">
                <p>Sneakers</p>
              </Link>
            </li>
            <li>
              <p>Sale</p>
            </li>
            <li>
              <p>New Launches</p>
            </li>
          </ul>
        </div>
        <div className="w-1/4  gap-2 flex flex-row justify-end">
          <Link to={"/user/login"}>
            <ButtonPrimary>
              <span>Login</span>
            </ButtonPrimary>
          </Link>
          <Link to={"/user/cart"}>
            <ButtonPrimary>
              <BsFillHandbagFill className="mr-1" />
              <span>Login</span>
            </ButtonPrimary>
          </Link>
        </div>
      </div>
    </nav>
  );
}
