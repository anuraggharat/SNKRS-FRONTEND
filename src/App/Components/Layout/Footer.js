import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black py-20 px-20 text-white flex flex-row">
      <div className="w-1/3">
        <h2 className="text-xl mb-4">Get Help</h2>
        <ul>
          <li className="font-light">Refunds</li>
          <li className="font-light">FAQ</li>
          <li className="font-light">Privacy Policy</li>
          <li className="font-light">Terms & Conditions</li>
        </ul>
      </div>
      <div className="w-1/3">
        <h2 className="text-xl mb-4">Navigation</h2>
        <ul>
          <li className="font-light">Men's</li>
          <li className="font-light">Womens</li>
          <li className="font-light">Kids</li>
          <li className="font-light">New Releases</li>
        </ul>
      </div>
      <div className="w-1/3">
        <h2 className="text-xl mb-4">Follow us at:</h2>
        <ul className='flex flex-row text-xl gap-3'>
          <li  >
            <i class="ri-facebook-line"></i>
          </li>
          <li >
            <i class="ri-instagram-line"></i>
          </li>
          <li >
              <i class="ri-twitter-line"></i>                                                                     
          </li>
        </ul>
      </div>
    </footer>
  );
}
