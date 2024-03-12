import React from "react";

const Navbar = () => {
  return (
    <div className="bg-primary-black sticky top-0 z-50">
      <div className="bg-primary-black flex justify-between items-center max-w-6xl mx-auto py-4">
        <div>
          <img src="src/assets/logo.png" alt="/" />
        </div>
        <ul className="flex gap-8 justify-between items-center text-white">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Price</li>
          <li>News</li>
        </ul>
        <button className="text-light-green border border-light-green p-2 rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
