import React from "react";
import { Link } from "react-router-dom";

export default function AddProducts() {
  return (
    <div>
      <main className="flex flex-row min-h-screen flex-wrap text-gray-600 relative justify-end">
        <div className="w-1/5 bg-white flex flex-col pt-20 px-10 font-medium fixed top-0 left-0 h-screen ">
          <Link to={"/admin/dashboard"}>
            <div className="flex flex-row px-5 py-5 rounded-lg ">
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
            <div className="flex flex-row px-5 py-5 rounded-lg bg-green-400 text-white shadow ">
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
          <div className=" py-5 flex w-full flex-row justify-start">
            <h1 className="text-2xl font-bold text-dark">Add a New Product</h1>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="w-1/3 p-1 ">
              <input
                name="name"
                className=" block w-full text-gray-700 bg-white border-0 shadow  rounded py-4 px-4 leading-tight focus:outline-none focus:bg-gray-200"
                type="text"
                placeholder="Product Name"
              />
            </div>
            <div className="w-1/3 p-1 ">
              <input
                name="name"
                className=" block w-full text-gray-700 bg-white shadow border-0  rounded py-4 px-4 leading-tight focus:outline-none focus:bg-gray-200"
                type="text"
                placeholder="Price"
              />
            </div>
            <div className="w-1/3 p-1">
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-white shadow text-gray-700 py-4 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option disabled>Brand</option>
                  <option>Adidas</option>
                  <option>Converse</option>
                  <option>Nike</option>
                  <option>Puma</option>
                  <option>Vans</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-1/3 p-1 ">
              <input
                name="name"
                className=" block w-full text-gray-700 bg-white shadow border-0  rounded py-4 px-4 leading-tight focus:outline-none focus:bg-gray-200"
                type="text"
                placeholder="Price"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
