import React from "react";

const CTA = () => {
  return (
    <div className="bg-light-green w-full h-[50vh] relative">
      <div className="w-full absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 text-center">
        <h1 className="text-5xl w-4/5 mx-auto mb-6 font-black text-primary-black">Start Your Crypto Odyssey With Us</h1>
        <p className="w-3/6 mb-6 text-xl mx-auto text-grey">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos vel dolorum voluptatum perspiciatis!
        </p>
        <div>
          <button className="bg-primary-black text-light-green p-2 rounded-full mr-4">
            Get Started
          </button>
          <button className="text-primary-black border border-primary-black p-2 rounded-full bg-transparent">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
