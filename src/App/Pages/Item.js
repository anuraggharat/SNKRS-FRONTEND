import React,{useState} from 'react'
import BagSidebar from '../Components/Common/BagSidebar';
import Footer from '../Components/Layout/Footer';
import Header from '../Components/Layout/Header'
import HorizontalList from '../Components/HorizontalList';

const data = [
  "https://superkicks.in/wp-content/uploads/2022/06/1-32-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/1-32-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/2-25-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/3-25-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/1-31-850x850.jpg",
];

export default function Item() {

  const [cartShown,setCartShown] = useState(false)
  const [selected, setSelected] = useState(data[0]);


  return (
    <div className="max-w-screen-2xl	mx-auto">
      <div className="px-5 md:px-20 flex flex-row pt-32 flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/5 p-1 flex flex-row md:flex-col justify-between ">
            <img
              src={data[1]}
              onClick={() => setSelected(data[1])}
              className="cursor-pointer w-20 h-20 md:w-full md:h-auto "
            />
            <img
              src={data[2]}
              onClick={() => setSelected(data[2])}
              className="cursor-pointer w-20 h-20 md:w-full md:h-auto "
            />
            <img
              src={data[3]}
              onClick={() => setSelected(data[3])}
              className="cursor-pointer w-20 h-20 md:w-full md:h-auto "
            />
            <img
              src={data[4]}
              onClick={() => setSelected(data[4])}
              className="cursor-pointer w-20 h-20 md:w-full md:h-auto "
            />
          </div>
          <div className="w-full bg- md:w-4/5 p-1">
            <img src={selected} />
          </div>
        </div>
        <div className="w-full md:w-1/2 pt-5 px-5 md:px-10">
          <h2>adidas originals</h2>
          <h1 className="text-3xl font-bold">
            OZELIA ‘CRYSTAL WHITE / CLOUD WHITE’
          </h1>
          <h4 className="my-2 text-xl font-medium">₹2,250/-</h4>
          <p className="mt-2 text-gray-700">
            The radiance lives on in the Nike Air Force 1 '07, the b-ball OG
            that puts a fresh spin on what you know best: durably stitched
            overlays, clean finishes and the perfect amount of flash to make you
            shine.
          </p>
          <h3 className="mt-3 text-xl font-medium mb-2">Available Sizes</h3>
          <div>
            <button className="hover:bg-black bg-slate-800 text-white font-bold py-2 px-4 rounded mr-2">
              6 UK
            </button>
            <button className="hover:bg-black bg-slate-800 text-white font-bold py-2 px-4 rounded mr-2">
              7 UK
            </button>
            <button className="hover:bg-black bg-slate-800 text-white font-bold py-2 px-4 rounded mr-2">
              8 UK
            </button>
            <button className="hover:bg-black bg-slate-800 text-white font-bold py-2 px-4 rounded mr-2">
              9 UK
            </button>
          </div>
          <div className="mt-4 flex flex-col">
            <button
              className="hover:bg-black  hover:text-white border-2 border-black text-black font-bold py-2 px-4 rounded "
              onClick={() => setCartShown(!cartShown)}
            >
              Add to Bag
            </button>
            <button className="hover:bg-black border-2 border-black bg-black text-white font-bold py-2 px-4 rounded mt-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <HorizontalList text="Similar Items" />
      </div>
      <div>
        <img src="https://media.gq.com/photos/60da019bab6b8cc6e9d2c96c/64:25/w_4224,h_1650,c_limit/GettyImages-1325229940.jpg" />
      </div>
      <BagSidebar setCartShown={setCartShown} cartShown={cartShown} />
    </div>
  );
}
