import React from 'react'
import { Link } from 'react-router-dom';

export default function CardItem({item}) {
    const toggleImage = (e, type) => {
      type === "over"
        ? (e.target.src = item.simage)
        : (e.target.src = item.image);
    };

  return (
    <Link to={`/sneakers/${"shoe1"}`}>
      <div className="w-72 mr-10">
        <img
          src={item.image}
          onMouseOver={(e) => toggleImage(e, "over")}
          onMouseLeave={(e) => toggleImage(e, "leave")}
        />
        <div className="w-100 flex flex-row justify-between mt-3">
          <div>
            <p className="text-gray-400 text-sm">Nike</p>
            <h2 className="text-black font-medium">Air Force 07</h2>
          </div>
          <div>
            <h2 className="text-black font-medium">80$</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
