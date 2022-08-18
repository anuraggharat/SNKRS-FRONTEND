import React, { useState,useEffect } from "react";
import axios from "axios";
import Sidebar from "../Components/Admin/Sidebar";
import ProductCard from "../Components/Common/ProductCard";
import FilterSidebar from "../Components/Layout/FilterSidebar";
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

  const [sidebar, setSidebar] = useState(window.innerWidth>444);
  const [data,setData] = useState([])


  const fetchProducts =async()=>{
    try {
      const {data} = await axios.get("http://localhost:3333/api/product");
      console.log(data)
      if (data.success) {
        setData(data.products)
      } else {
        alert("Unable to fetch the data at the moment.")
      }
    } catch (error) {
      alert("Unable to fetch the data at the moment")
    }
  }


  useEffect(() => {
    
    fetchProducts()
   
  }, [])
  

  return (
    <div className="w-100 bg-white min-h-screen relative">
      <div className="py-28 px-5 md:px-20 max-w-screen-xl mx-auto">
        <div className="flex flex-row justify-between items-center">
          <div>
            <p className="text-gray text-sm md:text-lg">
              Home / Shoes / Sneakers
            </p>
            <h1 className="text-2xl md:text-4xl">Sneakers</h1>
          </div>
          <div>
            <button
              className="md:hidden text-xl"
              onClick={() => setSidebar(!sidebar)}
            >
              <i className="ri-equalizer-line"></i>
            </button>
          </div>
        </div>

        <div className="flex flex-row flex-wrap md:mt-5">
          {sidebar && (
            <FilterSidebar colors={colors} brands={brands} gender={gender} />
          )}
          <div className="w-full md:w-4/5 flex flex-row flex-wrap">
            {data.map((item) => (
              <div className="w-1/2 md:w-1/3" key={item._id}>
                <ProductCard item={item} cardw="w-full" imgH="h-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
