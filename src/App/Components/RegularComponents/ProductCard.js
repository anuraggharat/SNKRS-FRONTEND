import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  console.log(item);
  return (
    <div className="w-100 p-1 mt-10 h-100">
      <Link to={`/sneakers/${"shoe1"}`}>
        <img src={item.image} className="w-100 h-80" />
        <div className="w-100 mt-3">
            <p className="text-gray-400 text-sm">Nike</p>
            <h2 className="text-black font-bold text-xl">Air Force 07</h2>
            <h2 className="text-black font-medium">80$</h2>
        </div>
      </Link>
    </div>
  );
}
