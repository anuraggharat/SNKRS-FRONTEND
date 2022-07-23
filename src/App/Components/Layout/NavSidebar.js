import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ButtonPrimary from '../Common/ButtonPrimary';

export default function NavSidebar({ sideBar}) {
  return (
    <div
      className={
        sideBar
          ? "z-20 top-0 left-0 fixed h-screen w-1/2 bg-white transition-all duration-200 ease-linear px-5"
          : "w-0"
      }
    >
      <div className="h-20 w-full flex flex-col justify-center">
        <h1 className="text-2xl font-thin">SNKRS</h1>
      </div>
      <div className="w-full flex flex-col justify-center">
        <ul className="flex flex-col justify-evenly gap-2">
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
          <li className="flex ">
            <button className="inline-flex items-center h-full text-xl">
              <i className="ri-search-line"></i>
            </button>
            <button className="inline-flex items-center px-2 h-full text-xl">
              <i className="ri-shopping-bag-line"></i>
            </button>
          </li>
          <li>
            <Link to={"/user/login"}>
              <ButtonPrimary>
                <span>Login</span>
              </ButtonPrimary>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
