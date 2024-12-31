/* eslint-disable no-unused-vars */
import React from "react";
import HeroImage from "../../assets/heroImage.jpeg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-100 dark:bg-gray-900">
      <div className="relative">
        <img
          src={HeroImage}
          alt="DummyShop Hero"
          className="w-full h-80 md:h-96 object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-extrabold drop-shadow-lg text-center px-4">
            Welcome to{" "}
            <span className="text-blue-400 block lg:inline">
              Dummy Online Shop
            </span>
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          About Dummy Online Shop
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Dummy Online Shop is your ultimate destination for affordable,
          high-quality products. From the latest gadgets to trendy fashion and
          essential home goods, we provide everything you need at unbeatable
          prices. Enjoy fast shipping, secure shopping, and a seamless
          experience that keeps you coming back for more.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/products"
            className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
