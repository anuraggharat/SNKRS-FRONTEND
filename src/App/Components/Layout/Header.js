import React from 'react'
import {FaRegUser} from 'react-icons/fa'
import {BsFillHandbagFill} from 'react-icons/bs'
import {Link, NavLink} from 'react-router-dom'
import ButtonPrimary from '../Common/ButtonPrimary';

export default function Header({sideBar,setSideBar}) {
  
  return (
    <nav className="fixed z-20 bg-slate-50 w-screen  flex flex-row justify-center h-20">
      <div className="flex mx-auto max-w-screen-xl w-full px-5 md:px-20 py-5  items-stretch">
        <div className="h-full w-1/2 md:w-1/4 flex flex-col justify-center">
          <Link to="/">
            <h1 className="text-2xl font-thin">SNKRS</h1>
          </Link>
        </div>
        <div className="w-0 hidden  md:block md:w-1/2">
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
        <div className="hidden md:w-1/4  gap-2 md:flex flex-row justify-end">
          <button className="inline-flex items-center px-2 h-full text-xl">
            <i className="ri-search-line"></i>
          </button>
          <Link to={"/user/cart"}>
            <button className="inline-flex items-center px-2 h-full text-xl">
              <i className="ri-shopping-bag-line"></i>
            </button>
          </Link>
          <Link to={"/user/login"}>
            <ButtonPrimary>
              <span>Login</span>
            </ButtonPrimary>
          </Link>
        </div>
        <div className="flex flex-row justify-end  w-1/2 md:hidden">
          <button
            className="px-4 py-2 bg-black text-white"
            onClick={() => setSideBar(!sideBar)}
          >
            {sideBar ? (
              <i class="ri-close-line"></i>
            ) : (
              <i class="ri-menu-3-fill"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
