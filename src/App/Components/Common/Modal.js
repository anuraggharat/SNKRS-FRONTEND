import React from 'react'
import adidas from '../../Assets/Images/adidas.png'

export default function Modal({modal,setModal}) {

  return (
    <div
      className={
        modal
          ? "fixed top-0 flex flex-row justify-center items-center left-0 h-screen w-full bg-black bg-opacity-90 z-20 transition-all duration-100 ease-in"
          : ""
      }
    >
      <div
        className={
          modal
            ? "w-1/3 bg-white flex flex-col items-center p-5 shadow-lg rounded-2xl mt-0 transition-all duration-700 ease-in"
            : "w-1/3 bg-white flex flex-col items-center p-5 shadow-lg rounded-2xl mt-out hidden"
        }
      >
        <img src={adidas} className="w-2/3 animate-bounce " />
        <h1 className="text-3xl font-medium mb-2 mt-2">Congratulations!</h1>
        <p className="mb-2">Your Adidas sneakers are on their way!</p>
        <button
          className="hover:bg-black border-2 border-black bg-black text-white font-bold py-2 px-4 rounded mt-2 w-100"
          onClick={() => setModal(!modal)}
        >
          Track your order
        </button>
      </div>
    </div>
  );
}
