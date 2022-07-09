import React from 'react'

export default function CardItem({item}) {
  return (
    <div className="w-72 mr-10">
      <img src={item.image} />
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
  );
}
