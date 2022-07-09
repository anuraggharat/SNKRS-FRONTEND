import React from 'react'
import HomeImage from './App/Assets/Images/home-image.jpg'
import Shoe1 from "./App/Assets/Images/shoe1.webp";



export default function App() {
  return (
    <div className="w-100 bg-slate-50 min-h-screen relative">
      <nav className="w-screen bg-slate-50 px-20 py-5 flex flex-row  justify-between fixed">
        <div className="">
          <h1>LOGO</h1>
        </div>
        <div className="w-1/2 ">
          <ul className="flex flex-row justify-between">
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Sneakers</p>
            </li>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Home</p>
            </li>
          </ul>
        </div>
        <div>
          <h2>Account</h2>
        </div>
      </nav>
      <div className="w-100 ">
        <img src={HomeImage} className="w-100" />
      </div>
      <div className="w-100 py-20">
        <div className="px-20">
          <div className="mb-10 flex flex-row justify-between">
            <h2>Latest Relase</h2>
            <div>left right</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="w-1/4">
              <img src={Shoe1} />
              <div className="w-100 flex flex-row justify-between mt-3">
                <div>
                  <p className="text-gray-400 text-sm">Nike</p>
                  <h2 className="text-black font-medium">Air Force 07</h2>
                </div>
                <div>
                  <h2 className="text-black font-medium">80$</h2>
                </div>
              </div>
            </div>
            <div className="w-1/4">
              <img src={Shoe1} />
              <div className="w-100 flex flex-row justify-between mt-3">
                <div>
                  <p className="text-gray-400 text-sm">Nike</p>
                  <h2 className="text-black font-medium">Air Force 07</h2>
                </div>
                <div>
                  <h2 className="text-black font-medium">80$</h2>
                </div>
              </div>
            </div>
            <div className="w-1/4">
              <img src={Shoe1} />
              <div className="w-100 flex flex-row justify-between mt-3">
                <div>
                  <p className="text-gray-400 text-sm">Nike</p>
                  <h2 className="text-black font-medium">Air Force 07</h2>
                </div>
                <div>
                  <h2 className="text-black font-medium">80$</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='bg-black py-20 px-20'>
          <h1 className='text-white'>Created by Anurag</h1>
      </footer>
    </div>
  );
}
