import React from "react";
import { Link } from "react-router-dom";
import InputBox from "../../Components/FormComponents/InputBox";
import SelectBox from "../../Components/FormComponents/SelectBox";

export default function AddProducts() {
  return (
    <div>
      <main className="flex flex-row min-h-screen flex-wrap text-gray-600 relative justify-end">
        <div className="w-1/5 bg-white flex flex-col pt-20 px-10 font-medium fixed top-0 left-0 h-screen">
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
              <InputBox name="name" type="text" placeholder="Product Name" />
            </div>
            <div className="w-1/3 p-1 ">
              <InputBox name="price" type="text" placeholder="Product Price" />
            </div>
            <div className="w-1/3 p-1">
              <SelectBox name="Brand" options={["Nike","Adidas","Puma","Converse","Vans"]}  />
            </div>
            <div className="w-1/3 p-1 ">
              <InputBox name="name" type="text" placeholder="Product Name" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
