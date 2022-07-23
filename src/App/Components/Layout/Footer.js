import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black py-5 md:py-20 px-5 md:px-20 text-white flex flex-col md:flex-row">
      <div className="w-100 md:w-1/3 py-12 md:py-0">
        <h2 className="text-xl mb-4">Get Help</h2>
        <ul>
          <li className="font-light">Refunds</li>
          <li className="font-light">FAQ</li>
          <li className="font-light">Privacy Policy</li>
          <li className="font-light">Terms & Conditions</li>
        </ul>
      </div>
      <div className="w-100 md:w-1/3 py-12 md:py-0">
        <h2 className="text-xl mb-4">Navigation</h2>
        <ul>
          <li className="font-light">Men's</li>
          <li className="font-light">Womens</li>
          <li className="font-light">Kids</li>
          <li className="font-light">New Releases</li>
        </ul>
      </div>
      <div className="w-100 md:w-1/3 py-12 md:py-0">
        <h2 className="text-xl mb-4">Follow us at:</h2>
        <ul className="flex flex-row text-xl gap-3">
          <li>
            <i className="ri-facebook-line"></i>
          </li>
          <li>
            <i className="ri-instagram-line"></i>
          </li>
          <li>
            <i className="ri-twitter-line"></i>
          </li>
        </ul>
      </div>
    </footer>
  );
}
