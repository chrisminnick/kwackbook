import React from "react";
import Ducky from "./assets/ducky.png";


const DuckAd = () => {
  return (
    <div className="duck-ad">
      <img src={Ducky} alt='Ducky' />
      <h2>Duck Deals of the Day!</h2>
      <p>Quacktastic discounts on all your favorite duck-related products.</p>
      <a
        href="https://a.co/d/d88qJEt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Shop Now</button>
      </a>
    </div>
  );
};

export default DuckAd;
