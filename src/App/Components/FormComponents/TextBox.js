import React from 'react'

export default function TextBox(props) {
  return (
    <textarea
      name={props.name}
      rows={props.rows}
      className="block w-full text-gray-700 bg-white border-[1px] shadow  rounded py-4 px-4 leading-tight focus:outline-none focus:bg-gray-200" placeholder={props.placeholder}
    ></textarea>
  );
}
