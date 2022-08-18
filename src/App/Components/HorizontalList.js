import React,{useEffect,useState} from 'react'
import axios from "axios";

import Shoe1 from "../Assets/Images/shoe1.webp";
import Shoe2 from "../Assets/Images/shoe2.jpg";
import Shoe3 from "../Assets/Images/shoe3.jpg";
import Shoe4 from "../Assets/Images/shoe4.jpg";
import Shoe5 from "../Assets/Images/shoe5.jpg";
import Shoe6 from "../Assets/Images/shoe6.jpg";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import ProductCard from './Common/ProductCard';


export default function HorizontalList({text="Latest Release"}) {
  let container;
  function scrollright() {
    container.scrollBy(300, 0);
  }
  function scrollleft() {
    container.scrollBy(-300, 0);
  }
  const [data, setData] = useState([]);


  
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3333/api/product");
      console.log(data);
      if (data.success) {
        setData(data.products);
      } else {
        alert("Unable to fetch the data at the moment.");
      }
    } catch (error) {
      alert("Unable to fetch the data at the moment");
    }
  };

  useEffect(() => {
       container = document.getElementById("container");
        fetchProducts()
  
  }, [])
  
  
  return (
    <div className="w-100 py-10 md:py-20">
      <div className="px-5 md:px-20">
        <div className="mb-10 flex flex-row justify-between">
          <h2 className="text-3xl font-bold">{text}</h2>
          <div>
            <button className="text-2xl px-2">
              <AiOutlineArrowLeft onClick={() => scrollleft()} />
            </button>
            <button className="text-2xl px-2">
              <AiOutlineArrowRight onClick={() => scrollright()} />
            </button>
          </div>
        </div>
        <div
          className="relative flex overflow-x-scroll hide-scroll-bar"
          id="container"
        >
          <div className="flex flex-nowrap">
            {data.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
