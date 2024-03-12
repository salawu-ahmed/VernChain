import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      image: "/Illustration 1.png",
      title: "Blockchain Development",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam id volutpat enim risus. Felis enim consectetur habitant mi nam nullam.",
    },
    {
      id: 2,
      image: "/Illustration 2.png",
      title: "Smart Contract Development",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam id volutpat enim risus. Felis enim consectetur habitant mi nam nullam.",
    },
    {
      id: 3,
      image: "/Illustration 3.png",
      title: "Tokenization Services",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam id volutpat enim risus. Felis enim consectetur habitant mi nam nullam.",
    },
    {
      id: 4,
      image: "/Illustration 4.png",
      title: "Cryptocurrency Solutions",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam id volutpat enim risus. Felis enim consectetur habitant mi nam nullam.",
    },
    {
      id: 5,
      image: "/Illustration 5.png",
      title: "Security and Compliance",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam id volutpat enim risus. Felis enim consectetur habitant mi nam nullam.",
    },
    {
      id: 6,
      image: "/Illustration 6.png",
      title: "Tokenization Services",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam id volutpat enim risus. Felis enim consectetur habitant mi nam nullam.",
    },
  ];

  return (
    <div className="w-full bg-primary-black pt-12">
      <hgroup className="mt-12 mb-20">
        <h1 className="text-light-green text-2xl font-bold text-center">
          SERVICES
        </h1>
        <p className="text-white font-bold text-4xl text-center">
          Innovate with Blockchain Technology
        </p>
      </hgroup>

      <div className="max-w-6xl mx-auto md:grid md:grid-cols-3 md:gap-20">
        {services.map((service) => {
          return (
            <div className="text-center" key={service.id}>
              <img src={service.image} alt="" className="mx-auto" />
              <h2 className="text-white font-bold text-xl my-2">
                {service.title}
              </h2>
              <p className="text-silver text-sm text-center">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
