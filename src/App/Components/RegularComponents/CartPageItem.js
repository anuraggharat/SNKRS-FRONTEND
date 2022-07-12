import React from 'react'

export default function CartPageItem({data}) {
  return (
    <>
      <div className="flex mb-2 flex-row w-100 justify-between items-start">
        <div className="flex flex-row w-100">
          <div className="relative">
            <img src={data[0]} className="w-32" />
            <button className="absolute w-5 rounded-full text-white flex flex-col justify-center items-center h-5 top-[-2%] left-[-2%] translate-x-0 translate-y-0	 bg-black">
              <i class="ri-close-line "></i>
            </button>
          </div>
          <div className="flex flex-col px-2 justify-start">
            <h1 className="font-medium text-lg">Adidas OZELIA CRYSTAL WHITE</h1>
            <p className="text-sm">Men's</p>
            <p className="text-sm">White</p>
            <p className="text-sm">9UK</p>
          </div>
        </div>
        <div className="flex flex-row border-2 border-black p-0">
          <button className="hover:bg-black border-2 text-xs inline-flex items-center border-black bg-black text-white  py-2 px-4 ">
            <i class="ri-subtract-line"></i>
          </button>
          <button className=" py-0 px-4 text-xs">1</button>
          <button className="hover:bg-black border-2 text-xs inline-flex items-center border-black bg-black text-white  py-2 px-4 ">
            <i class="ri-add-line"></i>
          </button>
        </div>
        <div className="flex flex-col text-right">
          <h1 className="font-normal text-lg">₹7,895/-</h1>
        </div>
      </div>
      <hr className="my-5" />
    </>
  );
}
