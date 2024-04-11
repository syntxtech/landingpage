import { services } from "@/constants";
import React from "react";

const Services = () => {
  return (
    <div
      className="w-full max-w-5xl  flex flex-col items-center gap-6 mt-10 mb-20 "
      id="services"
    >
      <p className="text-3xl lg:text-4xl mb-4">Our Services</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
        {services.map((option, index) => (
          <div
            key={index}
            className="p-4 rounded-md border flex items-center gap-4 hover:scale-105 duration-200 w-full"
          >
            <option.icon size={24} />
            <p className="text-xl">{option.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
