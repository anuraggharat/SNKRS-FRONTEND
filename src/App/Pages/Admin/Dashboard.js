import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <main className="flex flex-row min-h-screen flex-wrap text-gray-600 relative justify-end">
        <div className="w-1/5 bg-white flex flex-col pt-20 px-10 font-medium fixed top-0 left-0 h-screen ">
          <Link to={"/admin/dashboard"}>
            <div className="flex flex-row px-5 py-5 rounded-lg bg-green-400 text-white shadow">
              <i class="ri-dashboard-line mr-4"></i>
              <p>Dashboard</p>
            </div>
          </Link>
          <Link to={"/admin/dashboard"}>
            <div className="flex flex-row px-5 py-5 rounded-lg ">
              <i class="ri-line-chart-line  mr-4"></i>
              <p>Analytics</p>
            </div>
          </Link>
          <Link to={"/admin/dashboard"}>
            <div className="flex flex-row px-5 py-5 rounded-lg ">
              <i class="ri-shopping-bag-line mr-4"></i>
              <p>Shop</p>
            </div>
          </Link>
          <Link to={"/admin/dashboard"}>
            <div className="flex flex-row px-5 py-5 rounded-lg ">
              <i class="ri-user-line mr-4"></i>
              <p>User</p>
            </div>
          </Link>
          <Link to={"/admin/addproduct"}>
            <div className="flex flex-row px-5 py-5 rounded-lg ">
              <i class="ri-menu-add-line mr-4"></i>
              <p>Add Products</p>
            </div>
          </Link>
          <Link to={"/admin/dashboard"}>
            <div className="flex flex-row px-5 py-5 rounded-lg ">
              <i class="ri-logout-box-line mr-4"></i>
              <p>Logout</p>
            </div>
          </Link>
        </div>
        <div className="w-4/5 bg-gray-50 py-20 px-10">
          <div className="h-28 flex w-full flex-row justify-start">
            <img
              src="https://pixelmator.com/community/download/file.php?avatar=17785_1569233053.png"
              className="w-28 h-28 rounded-full"
            />
            <div className="flex flex-col justify-center ml-5">
              <h1 className="text-2xl font-bold text-dark">
                Good Morning, Anurag!
              </h1>
              <p>Here's an overview on whats happening at the shop</p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap mt-10 items-stretch">
            <div className="w-1/3 p-2">
              <div className="w-100 py-10 flex flex-col text-center justify-center px-2 bg-white shadow rounded-lg">
                <p className="mb-2 text-sm">New Orders</p>
                <h1 className="text-5xl font-medium text-black">1400</h1>
              </div>
            </div>
            <div className="w-1/3 p-2">
              <div className="w-100 py-10 flex flex-col text-center justify-center px-2 bg-white shadow rounded-lg">
                <p className="mb-2 text-sm">Pending Orders </p>
                <h1 className="text-5xl font-medium text-black">320</h1>
              </div>
            </div>
            <div className="w-1/3 p-2">
              <div className="w-100 py-10 flex flex-col text-center justify-center px-2 bg-white shadow rounded-lg">
                <p className="mb-2 text-sm">In Stock</p>
                <h1 className="text-5xl font-medium text-black">5000</h1>
              </div>
            </div>
            <div className="w-3/5 p-2 ">
              <div className="w-100 flex flex-col text-center justify-center p-5 bg-white shadow rounded-lg h-[400px] custom-scrollbar">
                <div className="inline-flex items-center flex-row justify-between mb-5">
                  <h1 className="font-medium text-black text-lg  inline-flex items-center">
                    <i class="ri-red-packet-line mr-1"></i>
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
                        <h1 className="text-lg font-medium text-black">
                          Nike Air Force 07
                        </h1>
                        <p className="text-xs">Mumbai, India</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-green-600">
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
                        <h1 className="text-lg font-medium text-black">
                          Vans SK8 Black
                        </h1>
                        <p className="text-xs">Delhi, India</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-green-600">
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
                        <h1 className="text-lg font-medium text-black">
                          Nike Air Jordan 4
                        </h1>
                        <p className="text-xs">Mumbai, India</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-green-600">
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
                        <h1 className="text-lg font-medium text-black">
                          Vans SK8 Black
                        </h1>
                        <p className="text-xs">Delhi, India</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-green-600">
                        +₹4,999
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/5 p-2 ">
              <div className="w-100 p-5 flex h-[400px] flex-col text-center bg-white shadow rounded-lg overflow-y-auto custom-scrollbar">
                <div className="inline-flex items-center flex-row justify-between mb-5">
                  <h1 className="font-medium text-black text-lg inline-flex items-center">
                    <i class="ri-mail-unread-line mr-1"></i>
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
