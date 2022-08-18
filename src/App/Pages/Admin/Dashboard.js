import React from 'react'
import { useState } from 'react';
import Sidebar from '../../Components/Admin/Sidebar';

export default function Dashboard() {


  const [sidebar, setSidebar] = useState(window.innerWidth > 444);

  return (
    <div>
      <main className="transition-all duration-1000 ease-in  flex flex-row min-h-screen flex-wrap bg-gray-50 text-gray-600 relative justify-end">
        <div className="w-full flex flex-row justify-end px-5 py-10">
          <button className="text-xl md:hidden" onClick={() => setSidebar(!sidebar)}>
            <i className="ri-dashboard-line"></i>
          </button>
        </div>
        {sidebar && (
          <Sidebar />
        )}
        <div className="w-full md:w-4/5 pb-20 px-5 md:px-10">
          <div className="h-14 md:h-28 flex w-full flex-row justify-start">
            <img
              src="https://pixelmator.com/community/download/file.php?avatar=17785_1569233053.png"
              className="h-14 w-14 md:w-28 md:h-28 rounded-full"
            />
            <div className="flex flex-col justify-center ml-1 md:ml-5">
              <h1 className="md:text-2xl font-bold text-dark">
                Good Morning, Anurag!
              </h1>
              <p className="text-xs">
                Here's an overview on whats happening at the shop
              </p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap mt-10 items-stretch">
            <div className="w-full md:w-1/3 p-2">
              <div className="w-100 py-10 flex flex-col text-center justify-center px-2 bg-white shadow rounded-lg">
                <p className="mb-2 text-sm">New Orders</p>
                <h1 className="text-5xl font-medium text-black">1400</h1>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-2">
              <div className="w-100 py-10 flex flex-col text-center justify-center px-2 bg-white shadow rounded-lg">
                <p className="mb-2 text-sm">Pending Orders </p>
                <h1 className="text-5xl font-medium text-black">320</h1>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-2">
              <div className="w-100 py-10 flex flex-col text-center justify-center px-2 bg-white shadow rounded-lg">
                <p className="mb-2 text-sm">In Stock</p>
                <h1 className="text-5xl font-medium text-black">5000</h1>
              </div>
            </div>
            <div className="w-full md:w-3/5 p-2 ">
              <div className="w-100 flex flex-col text-center justify-center p-5 bg-white shadow rounded-lg h-[400px] custom-scrollbar">
                <div className="inline-flex items-center flex-row justify-between mb-5">
                  <h1 className="font-medium text-black text-lg  inline-flex items-center">
                    <i className="ri-red-packet-line mr-1"></i>
                    <span>Recent Orders</span>
                  </h1>
                  <p className="text-md">see all</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between mb-4">
                    <div className="text-left flex flex-row">
                      <img
                        src="https://superkicks.in/wp-content/uploads/2022/06/1-156-850x850.jpg"
                        className="w-16 rounded"
                      />
                      <div className="flex flex-col justify-center ml-2">
                        <h1 className="text-sm md:text-lg font-medium text-black">
                          Nike Air Force 07
                        </h1>
                        <p className="text-xs">Mumbai, India</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm md:text-lg font-medium text-green-600">
                        +₹8,999
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mb-4">
                    <div className="text-left flex flex-row">
                      <img
                        src="https://superkicks.in/wp-content/uploads/2022/07/1-5-850x850.jpg"
                        className="w-16 rounded"
                      />
                      <div className="flex flex-col justify-center ml-2">
                        <h1 className="text-sm md:text-lg font-medium text-black">
                          Vans SK8 Black
                        </h1>
                        <p className="text-xs">Delhi, India</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm md:text-lg font-medium text-green-600">
                        +₹4,999
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mb-4">
                    <div className="text-left flex flex-row">
                      <img
                        src="https://superkicks.in/wp-content/uploads/2022/06/1-125-850x850.jpg"
                        className="w-16 rounded"
                      />
                      <div className="flex flex-col justify-center ml-2">
                        <h1 className="text-sm md:text-lg font-medium text-black">
                          Nike Air Jordan 4
                        </h1>
                        <p className="text-xs">Mumbai, India</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm md:text-lg font-medium text-green-600">
                        +₹18,999
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mb-4">
                    <div className="text-left flex flex-row">
                      <img
                        src="https://superkicks.in/wp-content/uploads/2022/07/1-5-850x850.jpg"
                        className="w-16 rounded"
                      />
                      <div className="flex flex-col justify-center ml-2">
                        <h1 className="text-sm md:text-lg font-medium text-black">
                          Vans SK8 Black
                        </h1>
                        <p className="text-xs">Delhi, India</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm md:text-lg font-medium text-green-600">
                        +₹4,999
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/5 p-2 ">
              <div className="w-100 p-5 flex h-[400px] flex-col text-center bg-white shadow rounded-lg overflow-y-auto custom-scrollbar">
                <div className="inline-flex items-center flex-row justify-between mb-5">
                  <h1 className="font-medium text-black text-lg inline-flex items-center">
                    <i className="ri-mail-unread-line mr-1"></i>
                    <span>Inbox</span>
                  </h1>
                  <p className="text-md">see all</p>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="text-left flex flex-row w-full">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex flex-row justify-center items-center text-sm text-black">
                      AG
                    </div>
                    <div className="flex flex-col justify-center ml-2">
                      <h1 className="text-xs font-medium text-black">
                        Replacement Request
                      </h1>
                      <p className="text-xs">Delhi, India</p>
                    </div>
                    <p className="ml-auto text-sm font-medium text-black">
                      19 July
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="text-left flex flex-row w-full">
                    <div className="w-10 h-10 bg-red-200 rounded-full flex flex-row justify-center items-center text-sm text-black">
                      TM
                    </div>
                    <div className="flex flex-col justify-center ml-2">
                      <h1 className="text-xs font-medium text-black">
                        Order Cancelled
                      </h1>
                      <p className="text-xs">Mumbai, India</p>
                    </div>
                    <p className="ml-auto text-sm font-medium text-black">
                      19 July
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="text-left flex flex-row w-full">
                    <div className="w-10 h-10 bg-blue-400 rounded-full flex flex-row justify-center items-center text-sm text-black">
                      SP
                    </div>
                    <div className="flex flex-col justify-center ml-2">
                      <h1 className="text-xs font-medium text-black">
                        New Shipment Arrived
                      </h1>
                      <p className="text-xs">Banglore, India</p>
                    </div>
                    <p className="ml-auto text-sm font-medium text-black">
                      18 July
                    </p>
                  </div>
                  <div></div>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="text-left flex flex-row w-full">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex flex-row justify-center items-center text-sm text-black">
                      CG
                    </div>
                    <div className="flex flex-col justify-center ml-2">
                      <h1 className="text-xs font-medium text-black">
                        Return Request
                      </h1>
                      <p className="text-xs">Banglore, India</p>
                    </div>
                    <p className="ml-auto text-sm font-medium text-black">
                      18 July
                    </p>
                  </div>
                  <div></div>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <div className="text-left flex flex-row w-full">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex flex-row justify-center items-center text-sm text-black">
                      SG
                    </div>
                    <div className="flex flex-col justify-center ml-2">
                      <h1 className="text-xs font-medium text-black">
                        Replacement Request
                      </h1>
                      <p className="text-xs">Banglore, India</p>
                    </div>
                    <p className="ml-auto text-sm font-medium text-black">
                      18 July
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
