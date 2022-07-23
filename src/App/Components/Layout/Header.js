import React from 'react'
import {FaRegUser} from 'react-icons/fa'
import {BsFillHandbagFill} from 'react-icons/bs'
import {Link, NavLink} from 'react-router-dom'
import ButtonPrimary from '../Common/ButtonPrimary';

export default function Header() {
  
  return (
    <nav className="fixed z-20 bg-slate-50 w-screen  flex flex-row justify-center">
      <div className="flex mx-auto max-w-screen-xl w-full  px-20 py-5  items-stretch">
        <div className="h-full w-1/4">
          <Link to="/">
            <h1 className="text-2xl font-thin">SNKRS</h1>
          </Link>
        </div>
        <div className="w-1/2">
          <ul className="flex flex-row justify-evenly items-center h-full">
            <li>
              <NavLink to="/">
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">
                <p>Sneakers</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">
                <p>Sale</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">
                <p>New Launches</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-1/4  gap-2 flex flex-row justify-end">
          <button className="inline-flex items-center px-2 h-full text-xl">
            <i class="ri-search-line"></i>
          </button>
          <Link to={"/user/cart"}>
            <button className="inline-flex items-center px-2 h-full text-xl">
              <i class="ri-shopping-bag-line"></i>
            </button>
          </Link>
          <Link to={"/user/login"}>
            <ButtonPrimary>
              <span>Login</span>
            </ButtonPrimary>
          </Link>
        </div>
      </div>
    </nav>
  );
}
