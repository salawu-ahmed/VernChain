import React from "react";

const About = () => {
  return (
    <div className="h-screen bg-primary-black flex items-center gap-16">
      <img src="/Frame 29.png" alt="" />
      <div className="w-1/2">
        <hgroup className="mb-8">
          <h1 className="text-light-green font-bold text-2xl mb-2">ABOUT US</h1>
          <p className="text-white text-4xl text-clip font-bold">
            Crypto saving base <br />
            of your choice
          </p>
        </hgroup>
        <p className="text-silver mb-8 text-sm pr-28">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          doloribus! Eaque illo quaerat explicabo maiores quasi officiis
          deleniti dolores est temporibus laboriosam. Obcaecati eius minus magni
          esse ratione aliquid perspiciatis dolores ipsum, tempore rem non ab
          vero reprehenderit tempora libero quasi earum incidunt quia, ea omnis
          sint reiciendis voluptas? Aperiam?
        </p>
        <button className="text-light-green bg-primary-black border border-light-green p-2 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
