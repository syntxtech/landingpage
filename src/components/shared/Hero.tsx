"use client";

import Lottie from "lottie-react";
import React from "react";
import PersonWorking from "../../../public/assets/lottie/PersonWorking.json";
import { FaGithub, FaLinkedinIn, FaSquareXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row  w-full max-w-6xl p-3 items-center justify-around">
      <div className="flex text-justify flex-col  gap-8 p-2">
        <div className="max-w-xs text-xl lg:text-2xl">
          Turning Ideas into Functional Sites and Apps: Professional and
          Cost-Effective Solutions.
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-4">
            <button className="bg-[#FF6663] px-14 py-3 rounded-md uppercase">
              Hire us
            </button>
            <button className="border border-[#FF6663] px-16 py-3 rounded-md uppercase">
              Contact us
            </button>
          </div>
          <div className="flex flex-col items-center justify-between">
            <FaSquareXTwitter size={20} />
            <FaGithub size={20} />
            <FaLinkedinIn size={20} />
          </div>
        </div>
      </div>

      <Lottie animationData={PersonWorking} className="w-full max-w-lg" />
    </div>
  );
};

export default Hero;
