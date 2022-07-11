import React from 'react'
import { IoMdClose } from "react-icons/io";


export default function CartListItem({img}) {
  return (
      <div className="flex flex-row justify-between align-middle mb-2 bg-white">
        <div className="flex flex-row">
          <img src={img} className="w-20" />
          <div className="ml-2 flex flex-col justify-center">
            <h1 className="text-sm font-thin">NIKE</h1>
            <h1 className="text-xl font-bold">Air Force 1</h1>
            <p className="">₹7,495/-</p>
          </div>
        </div>
        <div className="flex flex-col justify-start p-2">
          <IoMdClose className="text-xl" />
        </div>
      </div>
  );
}
