import React from 'react'
import { IoMdClose } from "react-icons/io";


export default function CartListItem({img}) {
  return (
    <div className="flex flex-row justify-between align-middle mb-2 bg-white cursor-pointer">
      <div className="flex flex-row">
        <img src={img} className="w-20" />
        <div className="ml-2 flex flex-col justify-center">
          <h1 className="text-xs font-thin">Adidas</h1>
          <h1 className="text- font-bold">OZELIA CRYSTAL WHITE</h1>
          <p className="">₹22,250/-</p>
        </div>
      </div>
      <div className=" flex-col   justify-start p-2">
        <IoMdClose className="text-xl  hover:flex" />
      </div>
    </div>
  );
}
