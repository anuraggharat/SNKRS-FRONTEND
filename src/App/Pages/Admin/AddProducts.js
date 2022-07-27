import React from "react";
import { Link } from "react-router-dom";
import CheckBox from "../../Components/FormComponents/CheckBox";
import InputBox from "../../Components/FormComponents/InputBox";
import SelectBox from "../../Components/FormComponents/SelectBox";
import TextBox from "../../Components/FormComponents/TextBox";

export default function AddProducts() {
  return (
    <div>
      <main className="flex flex-row min-h-screen flex-wrap text-gray-600 relative justify-end">
        <div className="w-1/5 bg-white flex flex-col pt-20 px-10 font-medium fixed top-0 left-0 h-screen ">
          <Link to={"/admin/dashboard"}>
            <div className="flex flex-row px-5 py-3 mb-3 rounded-lg hover:bg-slate-50 hover:shadow-sm">
              <i className="ri-dashboard-line mr-4"></i>
              <p>Dashboard</p>
            </div>
          </Link>
          <Link to={"/admin/dashboard"}>
            <div className="flex flex-row px-5 py-3 mb-3 rounded-lg hover:bg-slate-50 hover:shadow-sm">
              <i className="ri-line-chart-line  mr-4"></i>
              <p>Analytics</p>
            </div>
          </Link>
          <Link to={"/admin/dashboard"}>
            <div className="flex flex-row px-5 py-3 mb-3 rounded-lg hover:bg-slate-50 hover:shadow-sm">
              <i className="ri-shopping-bag-line mr-4"></i>
              <p>Shop</p>
            </div>
          </Link>
          <Link to={"/admin/dashboard"}>
            <div className="flex flex-row px-5 py-3 mb-3 rounded-lg hover:bg-slate-50 hover:shadow-sm">
              <i className="ri-user-line mr-4"></i>
              <p>User</p>
            </div>
          </Link>
          <Link to={"/admin/addproduct"}>
            <div className="flex flex-row px-5 py-3 mb-3 rounded-lg  bg-green-400 shadow text-white">
              <i className="ri-menu-add-line mr-4"></i>
              <p>Add Products</p>
            </div>
          </Link>
          <Link to={"/admin/dashboard"}>
            <div className="flex flex-row px-5 py-3 mb-3 rounded-lg hover:bg-slate-50 hover:shadow-sm">
              <i className="ri-logout-box-line mr-4"></i>
              <p>Logout</p>
            </div>
          </Link>
        </div>
        <div className="w-4/5 bg-gray-50 py-20 px-10">
          <div className=" py-5 flex w-full flex-row justify-start p-2">
            <h1 className="text-2xl font-bold text-dark">Add a New Product</h1>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="w-1/3 p-2">
              <InputBox name="name" type="text" placeholder="Product Name" />
            </div>
            <div className="w-1/3 p-2">
              <InputBox
                name="category"
                type="text"
                placeholder="Product Category"
              />
            </div>
            <div className="w-1/3 p-2">
              <InputBox name="price" type="text" placeholder="Product Price" />
            </div>
            <div className="w-2/3 p-2">
              <TextBox name="desc" rows="3" placeholder="Product Description" />
            </div>
            <div className="w-1/3 p-2">
              <SelectBox
                name="Brand"
                options={["Nike", "Adidas", "Puma", "Converse", "Vans"]}
              />
            </div>
            <div className="w-1/3 p-2">
              <SelectBox name="Gender" options={["Male", "Female", "Kids"]} />
            </div>
            <div className="w-1/3 p-2">
              <SelectBox
                name="Color"
                options={["black", "red", "brown", "white", "gray"]}
              />
            </div>
            <div className="w-1/3 p-2">
              <SelectBox
                name="Tag"
                options={["popular", "latest", "limited", "white", "gray"]}
              />
            </div>
            {/* <div className="w-1/3 p-1">
              <CheckBox title="Sizes" options={["6", "7", "8", "9", "10"]} />
            </div> */}
            <div className="w-1/2 p-2 ">
              <InputBox
                name="picone"
                type="text"
                placeholder="Product Image 1"
              />
            </div>
            <div className="w-1/2 p-2 ">
              <InputBox
                name="pictwo"
                type="text"
                placeholder="Product Image 2"
              />
            </div>
            <div className="w-1/2 p-2 ">
              <InputBox
                name="picthree"
                type="text"
                placeholder="Product Image 3"
              />
            </div>
            <div className="w-1/2 p-2 ">
              <InputBox
                name="picfour"
                type="text"
                placeholder="Product Image 4"
              />
            </div>
            <div className="w-full p-2">
              <CheckBox
                title="Available Sizes"
                options={[6, 7, 8, 9, 10, 11]}
              />
            </div>
          </div>
          <div className="flex flex-row p-2">
            <button className="bg-black w-full text-lg text-white border-2 border-black  font-bold py-4 px-4 rounded ">
              Add Product
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
