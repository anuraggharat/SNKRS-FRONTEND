import React from 'react'

export default function InputBox(props) {
  return (
    <input
      name={props.name}
      className="block w-full text-gray-700 bg-white border-[1px] shadow  rounded py-4 px-4 leading-tight focus:outline-none focus:bg-gray-200"
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}
