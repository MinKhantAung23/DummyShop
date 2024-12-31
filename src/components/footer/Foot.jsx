/* eslint-disable no-unused-vars */
import React from "react";
import { FaGithub, FaFacebook, FaTelegram, FaShopify } from "react-icons/fa";
import { Link } from "react-router-dom";

const Foot = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white border-gray-500 border-t py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center sm:items-start">
            <Link
              to={"/"}
              className="text-2xl flex items-center gap-2 font-semibold"
            >
              Dummy
              <FaShopify className="ml-1 text-xl animate-pulse" />
            </Link>
            <p className="text-sm text-gray-400 mt-2">
              Dummy Online Shop is your ultimate destination for affordable,
              high-quality products.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/MinKhantAung23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/MinKhantAung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://t.me/minkhantaung231"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <FaTelegram />
            </a>
          </div>

          <div className="flex flex-col items-center sm:items-end space-y-2">
            <Link
              to="/about"
              className="text-lg text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-105"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-lg text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          © {date} Dummy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Foot;
