"use client";
import { useState, useEffect } from "react";
import { navLinks } from "@/constants";
import { Link } from "react-scroll/modules";
import React from "react";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navbarStyle = {
    transition: "top 0.3s",
    top: visible ? "0" : "-100px",
  };

  return (
    <div
      id="navbar"
      className="w-full lg:max-w-3xl mx-auto flex text-gray-400 justify-center gap-6 items-center p-4 lg:p-6 rounded-full border-2 bg-[#111827] sticky  shadow-md z-50"
      style={navbarStyle}
    >
      {navLinks.map((link, index) => (
        <button key={index}>
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
      ))}
    </div>
  );
};

export default Header;
