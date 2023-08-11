import React from "react";

const HeroSecton = () => {
  return (
    <main className="hero container">
      <div className="hero-container">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-img">
            <img src="../../public/images/brand_logo.png" alt="brand-logo" />
            <img src="../../public/images/amazon.png" alt="amazon-logo" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="../../public/images/shoe_image (1).png" alt="Shoe" />
      </div>
    </main>
  );
};

export default HeroSecton;
