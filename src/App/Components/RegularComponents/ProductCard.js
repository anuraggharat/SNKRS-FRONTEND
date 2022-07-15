import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  const toggleImage = (e,type) => {
    type === "over"
      ? (e.target.src = item.simage)
      : (e.target.src = item.image);
  };

  return (
    <div className="w-100 p-1 mt-10 h-100 ">
      <Link to={`/sneakers/${"shoe1"}`}>
        <img
          src={item.image}
          className="w-100 h-72 shadow-xs transition-all duration-1000 ease-in"
          onMouseOver={(e) => toggleImage(e,"over")}
          onMouseLeave={(e) => toggleImage(e,"leave")}
        />
        <div className="w-100 mt-3">
          <p className="text-gray-400 text-sm">Nike</p>
          <h2 className=" font-medium text-xl">Air Force 07</h2>
          <h2 className="font-medium">80$</h2>
        </div>
      </Link>
    </div>
  );
}
