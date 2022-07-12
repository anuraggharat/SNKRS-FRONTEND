import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const data = [
  "https://superkicks.in/wp-content/uploads/2022/06/1-32-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/1-32-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/2-25-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/3-25-850x850.jpg",
  "https://superkicks.in/wp-content/uploads/2022/06/1-31-850x850.jpg",
];

export default function Checkout() {
  const [cartShown, setCartShown] = useState(false);
  const [selected, setSelected] = useState(data[0]);

  console.log(cartShown);

  return (
    <div className="max-w-screen-2xl	mx-auto">
      <Header />
 
      <Footer />
    </div>
  );
}
