import React from "react";
import { Link } from "react-router-dom";
import CheckBox from "../../Components/FormComponents/CheckBox";
import InputBox from "../../Components/FormComponents/InputBox";
import SelectBox from "../../Components/FormComponents/SelectBox";
import TextBox from "../../Components/FormComponents/TextBox";
import Sidebar from "../../Components/Admin/Sidebar";
import { useState } from "react";

export default function AddProducts() {
    const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <main className="transition-all duration-1000 ease-in  flex flex-row min-h-screen flex-wrap bg-gray-50 text-gray-600 relative justify-end">
        <div className="w-full flex flex-row justify-end px-5 py-10">
          <button className="text-xl" onClick={() => setSidebar(!sidebar)}>
            <i className="ri-dashboard-line"></i>
          </button>
        </div>
        {sidebar && <Sidebar />}
        <div className="w-full md:w-4/5 bg-gray-50 pb-20 px-10">
          <div className=" py-5 flex w-full flex-row justify-start p-2">
            <h1 className="text-2xl font-bold text-dark">Add a New Product</h1>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="w-full md:w-1/3 p-2">
              <InputBox name="name" type="text" placeholder="Product Name" />
            </div>
            <div className="w-full md:w-1/3 p-2">
              <InputBox
                name="category"
                type="text"
                placeholder="Product Category"
              />
            </div>
            <div className="w-full md:w-1/3 p-2">
              <InputBox name="price" type="text" placeholder="Product Price" />
            </div>
            <div className="w-full md:w-1/3 p-2">
              <TextBox name="desc" rows="3" placeholder="Product Description" />
            </div>
            <div className="w-full md:w-1/3 p-2">
              <SelectBox
                name="Brand"
                options={["Nike", "Adidas", "Puma", "Converse", "Vans"]}
              />
            </div>
            <div className="w-full md:w-1/3 p-2">
              <SelectBox name="Gender" options={["Male", "Female", "Kids"]} />
            </div>
            <div className="w-full md:w-1/3 p-2">
              <SelectBox
                name="Color"
                options={["black", "red", "brown", "white", "gray"]}
              />
            </div>
            <div className="w-full md:w-1/3 p-2">
              <SelectBox
                name="Tag"
                options={["popular", "latest", "limited", "white", "gray"]}
              />
            </div>
            {/* <div className="w-1/3 p-1">
              <CheckBox title="Sizes" options={["6", "7", "8", "9", "10"]} />
            </div> */}
            <div className="w-full md:w-1/3 p-2">
              <InputBox
                name="picone"
                type="text"
                placeholder="Product Image 1"
              />
            </div>
            <div className="w-full md:w-1/3 p-2">
              <InputBox
                name="pictwo"
                type="text"
                placeholder="Product Image 2"
              />
            </div>
            <div className="w-full md:w-1/3 p-2">
              <InputBox
                name="picthree"
                type="text"
                placeholder="Product Image 3"
              />
            </div>
            <div className="w-full md:w-1/3 p-2">
              <InputBox
                name="picfour"
                type="text"
                placeholder="Product Image 4"
              />
            </div>
            <div className="w-full md:w-1/3 p-2">
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
