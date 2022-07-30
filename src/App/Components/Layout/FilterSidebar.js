import React from 'react'

export default function FilterSidebar({brands,colors,gender}) {
  return (
    <div className="absolute top-0 left-0 bg-white z-20 md:z-10 min-h-screen md:static w-1/2 md:w-1/5 md:flex md:flex-col p-2">
      <div className="w-100 pr-3 border-b-[1px] py-4">
        <h2 className="text-xl font-medium mb-2">Sort</h2>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>Latest</option>
            <option>Price Ascending</option>
            <option>Price Descending</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-100 flex flex-col border-b-[1px] py-4">
        <h2 className="text-xl font-medium mb-2">Filter by Brand</h2>
        {brands.map((item) => (
          <div
            key={item}
            className="flex flex-row align-middle h-100 items-center content-center mb-1"
          >
            <input type="checkbox" id="Asics" className="mr-2 bg-black"></input>
            <p className="mb-1">{item}</p>
          </div>
        ))}
      </div>
      <div className="w-100 flex flex-col border-b-[1px] py-4">
        <h2 className="text-xl font-medium mb-2">Filter by Color</h2>
        {colors.map((item) => (
          <div
            key={item}
            className="flex flex-row align-middle h-100 items-center content-center mb-1"
          >
            <input type="checkbox" id="Asics" className="mr-2 bg-black"></input>
            <p className="mb-1">{item}</p>
          </div>
        ))}
      </div>
      <div className="w-100 flex flex-col border-b-[1px] py-4">
        <h2 className="text-xl font-medium mb-2">Filter by Gender</h2>
        {gender.map((item) => (
          <div
            key={item}
            className="flex flex-row align-middle h-100 items-center content-center mb-1"
          >
            <input type="checkbox" id="Asics" className="mr-2 bg-black"></input>
            <p className="mb-1">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
