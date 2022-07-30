import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ item,cardw,imgH }) {

      if (!item.simage) {
        item.simage =
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/338fa63c-1898-4bce-beb9-4c80c92ea2cf/air-force-1-07-lx-shoes-xMp6zh.png";
      } 
  const toggleImage = (e,type) => {
    type === "over"
      ? (e.target.src = item.simage)
      : (e.target.src = item.image);
  };

  return (
    <div className="w-100 p-2 mt-10 h-100 ">
      <Link to={`/sneakers/${"shoe1"}`}>
        <div className={cardw ? cardw : "w-72"}>
          <img
            src={item.image}
            className={imgH ? imgH : "h-72"}
            onMouseOver={(e) => toggleImage(e, "over")}
            onMouseLeave={(e) => toggleImage(e, "leave")}
            alt="Product SNKRS"
          />
          <div className="w-100 px-1 flex flex-row justify-between mt-3">
            <div>
              <p className="text-gray-400 text-sm">Nike</p>
              <h2 className="text-black font-medium">Air Force 07</h2>
            </div>
            <div>
              <h2 className="text-black  md:text-xl font-medium">80$</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
