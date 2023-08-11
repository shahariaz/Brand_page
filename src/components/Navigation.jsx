import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src="/../public/images/brand_logo.png" alt="Logo" />
        </div>
        <ul>
          <li herf="#"> Menu</li>
          <li herf="#"> Location</li>
          <li herf="#"> About</li>
          <li herf="#"> Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navigation;
