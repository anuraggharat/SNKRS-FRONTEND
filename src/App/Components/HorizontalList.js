import React,{useEffect,useState} from 'react'
import axios from "axios";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import ProductCard from './Common/ProductCard';


export default function HorizontalList({text="Latest Release"}) {
  function scrollright() {
      let container = document.getElementById("container");

    container.scrollBy(300, 0);
  }
  function scrollleft() {
      let container = document.getElementById("container");

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
        fetchProducts()
  
  }, [])
  
  
  return (
    <div className="w-100 py-10 md:py-20">
      <div className="px-5 md:px-20">
        <div className="mb-5 flex flex-row justify-between">
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
          className="relative flex overflow-x-scroll custom-scrollbar pb-10"
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
