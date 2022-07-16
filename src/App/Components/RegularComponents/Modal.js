import React from 'react'
import adidas from '../../Assets/Images/adidas.png'

export default function Modal() {
  return (
    <div className="fixed top-0 flex flex-row justify-center items-center left-0 h-screen w-full bg-slate-300 z-20">
      <div className="w-1/3 bg-white flex flex-col items-center p-5">
        <img src={adidas} className=" animate-bounce" />
        <h1 className="text-3xl font-medium mb-2">Congratulations!</h1>
        <p>Your Adidas sneakers are on their way!</p>
        <button className="hover:bg-black border-2 border-black bg-black text-white font-bold py-2 px-4 rounded mt-2 w-100">
          Track your order
        </button>
      </div>
    </div>
  );
}
