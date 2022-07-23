import React from 'react'

export default function ButtonPrimary({children}) {
  return (
    <button className="hover:bg-white text-center hover:text-black bg-black border-2 w-full inline-flex items-center border-black text-white font-medium py-2 px-8">
      {children}
    </button>
  );
}
