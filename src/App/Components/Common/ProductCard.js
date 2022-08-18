import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ item,cardw,imgH }) {

   
  const toggleImage = (e,type) => {
    type === "over"
      ? (e.target.src = item.picture1)
      : (e.target.src = item.mainpicture);
  };

  return (
    <div className="w-100 p-2 mt-10 h-100 ">
      <Link to={`/sneakers/${item._id}`}>
        <div className={cardw ? cardw : "w-72"}>
          <img
            src={item.mainpicture}
            className={imgH ? imgH : "h-72"}
            onMouseOver={(e) => toggleImage(e, "over")}
            onMouseLeave={(e) => toggleImage(e, "leave")}
            alt="Product SNKRS"
          />
          <div className="w-100 px-1 flex flex-row justify-between mt-3">
            <div>
              <p className="text-gray-400 text-sm">{item.brand}</p>
              <h2 className="text-black font-medium">{item.name}</h2>
            </div>
            <div>
              <h2 className="text-black  md:text-md font-medium">
                {item.price}
              </h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
