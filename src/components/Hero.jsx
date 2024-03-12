import React from "react";

const Hero = () => {
  return (
    <div className="bg-primary-black">
      {/* <div className="bg-primary-black bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-light-green to-primary-black"> */}
      <div className="flex items-center justify-between max-w-6xl mx-auto h-[calc(100vh-80px)] py-12">
        <div className="w-1/2">
          <h1 className="text-6xl text-white font-bold mb-4">
            Trusted Crypto Preservation
          </h1>
          <p className="text-silver mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            reiciendis. Distinctio, quam?
          </p>
          <button className="bg-light-green text-primary-black p-2 rounded-full mr-4">
            Get Started
          </button>
          <button className="bg-primary-black text-light-green border border-light-green p-2 rounded-full">
            Learn more
          </button>
        </div>

        <div className="w-1/2 h-full flex relative mb-2 z-10">
          <div className="">
            <img src="src/assets/Asset 13.png" alt="" />
          </div>
          <div className="absolute bottom-0 right-0">
            <img src="src/assets/Asset 11.png" alt="" />
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-between bg-light-green p-4 rounded mx-auto max-w-6xl">
        <img src="src/assets/Logo.png" alt="" />
        <img src="src/assets/Logo (1).png" alt="hello" />
        <img src="src/assets/Logo (2).png" alt="" />
        <img src="src/assets/Logo (3).png" alt="" />
      </div> */}
    </div>
  );
};

export default Hero;
