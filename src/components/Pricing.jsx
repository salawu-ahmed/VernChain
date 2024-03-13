import React from "react";
import { FaCheck, FaDollarSign } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="bg-primary-black">
      <div className="max-w-6xl flex justify-between gap-6 py-24 mx-auto">
        <div className="w-2/5 mt-12">
          <hgroup className="mb-8">
            <h1 className="text-light-green font-bold text-xl mb-2">PRICE</h1>
            <p className="text-white text-2xl text-clip font-bold">
              Flexible pricing <br />
              for every project
            </p>
          </hgroup>
          <p className="text-silver mb-8 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            nulla quia optio a obcaecati eius, hic sint ab ipsam esse laboriosam
            corrupti adipisci libero?
          </p>
          <button className="text-light-green bg-primary-black border border-light-green p-2 rounded-full">
            Learn More
          </button>
        </div>

        <div className="w-3/5 flex flex-end gap-8 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-light-green via-primary-black to-primary-black py-20">
          <div className="max-w-[300px] bg-primary-black p-4 rounded-xl border border-light-green text-center text-white">
            <h2 className="font-bold text-md">Basic Edition</h2>
            <p className="my-6 flex items-center justify-center">
              <span>
                <FaDollarSign className="inline mr-0  p-0" size={20} />
              </span>
              <span className="text-5xl font-black  ml-0 mt-0">600</span>
              /pr
            </p>
            <p className="w-full mx-auto mb-4">Lorem ipsum dolor sit amet consectetur. Eu eget ornare.</p>
            <ul className="mb-8">
              <li><FaCheck className="inline-block mr-2"/>Lorem ipsum dolor sit.</li>
              <li><FaCheck className="inline-block mr-2"/>Lorem ipsum dolor sit.</li>
              <li><FaCheck className="inline-block mr-2"/>Lorem ipsum dolor sit.</li>
              <li><FaCheck className="inline-block mr-2"/>Lorem ipsum dolor sit.</li>
            </ul>
            <button className="text-light-green border border-light-green p-2 rounded-full">
              Learn More
            </button>
          </div>

          <div className="bg-light-green p-4 rounded-xl text-center max-w-[300px]">
            <h2 className="font-bold text-md">Enterprise Edition</h2>
            <p className="my-6 flex items-center justify-center">
              <span>
                <FaDollarSign className="inline mr-0  p-0" size={20} />
              </span>
              <span className="text-5xl font-black  ml-0 mt-0">1000</span>
              /pr
            </p>
            <p className="w-4/5 mx-auto mb-4">Lorem ipsum dolor sit amet consectetur. Eu eget ornare.</p>
            <ul className="mb-8">
              <li><FaCheck className="inline-block mr-2"/>Lorem ipsum dolor sit.</li>
              <li><FaCheck className="inline-block mr-2"/>Lorem ipsum dolor sit.</li>
              <li><FaCheck className="inline-block mr-2"/>Lorem ipsum dolor sit.</li>
              <li><FaCheck className="inline-block mr-2"/>Lorem ipsum dolor sit.</li>
            </ul>
            <button className="text-light-green bg-primary-black border p-2 rounded-full border-primary-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
