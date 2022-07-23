import React from "react";

export default function ButtonPrimary({ children }) {
  return (
    <button className="bg-white text-center text-black hover:bg-black border-2 w-full inline-flex items-center border-black hover:text-white font-medium py-2 px-8">
      {children}
    </button>
  );
}
