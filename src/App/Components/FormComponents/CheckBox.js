import React from 'react'

export default function CheckBox(props) {
  return (
    <div className="w-full inline-flex items-center">
      <div>
        <h2 className="text-xl font-medium mr-4">{props.title}</h2>
      </div>
      <div
        className="flex flex-row align-middle h-100 mt-1 items-center content-center ">
        {props.options.map((item) => (
          <>
          <input key={item} type="checkbox" id={props.title} className="mr-1 bg-black">
            </input>
            <p className="mr-5 text-lg">{item}</p>
          </>
        ))}
      </div>
    </div>
  );
}
