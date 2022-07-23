import React from "react";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import ProductCard from "../Components/Common/ProductCard";

const data = [
  {
    id: 1,
    image: "https://superkicks.in/wp-content/uploads/2022/07/1-5-850x850.jpg",
    simage: "https://superkicks.in/wp-content/uploads/2022/07/2-5-850x850.jpg",
  },
  {
    id: 2,
    image: "https://superkicks.in/wp-content/uploads/2022/05/1-142-850x850.jpg",
    simage: "https://superkicks.in/wp-content/uploads/2022/07/1-55-850x850.jpg",
  },
  {
    id: 3,
    image: "https://superkicks.in/wp-content/uploads/2022/06/1-148-850x850.jpg",
    simage: "https://superkicks.in/wp-content/uploads/2022/07/1-55-850x850.jpg",
  },
  {
    id: 4,
    image: "https://superkicks.in/wp-content/uploads/2022/06/1-45.jpg",
    simage: "https://superkicks.in/wp-content/uploads/2022/07/1-55-850x850.jpg",
  },
  {
    id: 5,
    image:
      "https://superkicks.in/wp-content/uploads/2022/06/DH4621-600-850x850.jpg",
    simage: "https://superkicks.in/wp-content/uploads/2022/07/1-55-850x850.jpg",
  },
  {
    id: 6,
    image: "https://superkicks.in/wp-content/uploads/2022/07/4-46-850x850.jpg",
    simage: "https://superkicks.in/wp-content/uploads/2022/07/1-55-850x850.jpg",
  },
  {
    id: 7,
    image: "https://superkicks.in/wp-content/uploads/2022/05/1-142.jpg",
    simage: "https://superkicks.in/wp-content/uploads/2022/07/1-55-850x850.jpg",
  },
  {
    id: 8,
    image: "https://superkicks.in/wp-content/uploads/2022/06/1-104-850x850.jpg",
    simage: "https://superkicks.in/wp-content/uploads/2022/06/2-85-850x850.jpg",
  },
  {
    id: 9,
    image: "https://superkicks.in/wp-content/uploads/2022/06/1-49-850x816.jpg",
    simage: "https://superkicks.in/wp-content/uploads/2022/06/2-38-850x816.jpg",
  },
];

const brands = ["Asics", "Converse", "Nike", "Adidas","Vans"];

const colors = ["White", "Black", "Red", "Gray", "Brown"];
const gender = ["Male", "Female"];


export default function Products() {



  











    console.log(data)
  return (
    <div className="w-100 bg-white min-h-screen relative">
      <Header />
      <div className="py-28 px-20 max-w-screen-xl mx-auto">
        <div className="">
          <p className="text-gray">Home / Shoes / Sneakers</p>
          <h1 className="text-4xl">Sneakers</h1>
        </div>
        <div className="flex flex-row flex-wrap mt-5">
          <div className="w-1/5 flex flex-col p-2">
            <div className="w-100 pr-3 border-b-[1px] py-4">
              <h2 className="text-xl font-medium mb-2">Sort</h2>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Latest</option>
                  <option>Price Ascending</option>
                  <option>Price Descending</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
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
            <div className="w-100 flex flex-col border-b-[1px] py-4">
              <h2 className="text-xl font-medium mb-2">Filter by Brand</h2>
              {brands.map((item) => (
                <div
                  key={item}
                  className="flex flex-row align-middle h-100 items-center content-center mb-1"
                >
                  <input
                    type="checkbox"
                    id="Asics"
                    className="mr-2 bg-black"
                  ></input>
                  <p className="mb-1">{item}</p>
                </div>
              ))}
            </div>
            <div className="w-100 flex flex-col border-b-[1px] py-4">
              <h2 className="text-xl font-medium mb-2">Filter by Color</h2>
              {colors.map((item) => (
                <div
                  key={item}
                  className="flex flex-row align-middle h-100 items-center content-center mb-1"
                >
                  <input
                    type="checkbox"
                    id="Asics"
                    className="mr-2 bg-black"
                  ></input>
                  <p className="mb-1">{item}</p>
                </div>
              ))}
            </div>
            <div className="w-100 flex flex-col border-b-[1px] py-4">
              <h2 className="text-xl font-medium mb-2">Filter by Gender</h2>
              {gender.map((item) => (
                <div
                  key={item}
                  className="flex flex-row align-middle h-100 items-center content-center mb-1"
                >
                  <input
                    type="checkbox"
                    id="Asics"
                    className="mr-2 bg-black"
                  ></input>
                  <p className="mb-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-4/5 flex flex-row flex-wrap">
            <div className="w-1/3">
              <ProductCard item={data[0]} />
            </div>
            <div className="w-1/3">
              <ProductCard item={data[1]} />
            </div>
            <div className="w-1/3">
              <ProductCard item={data[2]} />
            </div>
            <div className="w-1/3">
              <ProductCard item={data[3]} />
            </div>
            <div className="w-1/3">
              <ProductCard item={data[4]} />
            </div>
            <div className="w-1/3">
              <ProductCard item={data[5]} />
            </div>
            <div className="w-1/3">
              <ProductCard item={data[6]} />
            </div>
            <div className="w-1/3">
              <ProductCard item={data[7]} />
            </div>
            <div className="w-1/3">
              <ProductCard item={data[8]} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
