import React from 'react'

export default function SelectBox(props) {
  return (
    <div class="relative">
      <select
        class="block appearance-none w-full bg-white border-[1px] shadow text-gray-700 py-4 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-state"
      >
        <option disabled>{props.name}</option>
        {props.options.map((item) => (
          <option key={item} value={item} >{item}</option>
        ))}
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
