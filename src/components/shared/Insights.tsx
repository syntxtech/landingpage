"use client";

import { benefits } from "@/constants";
import Lottie from "lottie-react";
import { FaCheckCircle } from "react-icons/fa";

const Insights = () => {
  return (
    <div className="flex flex-col w-full max-w-5xl items-center justify-center mt-24 text-pretty">
      <h2 className="text-3xl lg:text-5xl mb-8">Why choose us ?</h2>
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="flex flex-wrap items-center justify-between py-8"
        >
          <div
            className={`w-full md:w-1/2 lg:w-2/3 px-4 ${
              index % 2 === 0 ? "order-2" : ""
            }`}
          >
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">{benefit.title}</h2>
              <p className="mb-4 py-3">{benefit.description}</p>
              <ul className="mb-4">
                {benefit.points.map((point, i) => (
                  <li
                    key={i}
                    className="mb-2 hover:scale-105 ease-in transition-all duration-200"
                  >
                    <div className="flex  gap-2  md:justify-start">
                      <FaCheckCircle size={22} className="text-green-600" />{" "}
                      <div>
                        <strong>{point.point}:</strong> {point.description}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={`w-full md:w-1/2 lg:w-1/3 px-4 ${
              index % 2 !== 0 ? "order-1" : ""
            }`}
          >
            {benefit.animationData && (
              <Lottie animationData={benefit.animationData} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Insights;
