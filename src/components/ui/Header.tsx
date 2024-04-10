"use client";

import { navLinks } from "@/constants";
import { Link } from "react-scroll/modules";
import React from "react";

const Header = () => {
  return (
    <div className="w-full  lg:max-w-3xl mx-auto flex text-gray-400  justify-center gap-6 items-center p-4 lg:p-6 rounded-full border-2 bg-[#111827]  sticky top-10 shadow-md z-50 ">
      {navLinks.map((link) => (
        <>
          <button>
            <Link
              activeClass="active"
              to={link.route}
              spy={true}
              smooth={true}
              offset={0}
              duration={50}
            >
              {link.label}
            </Link>
          </button>
        </>
      ))}
    </div>
  );
};

export default Header;
