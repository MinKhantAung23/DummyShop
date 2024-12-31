/* eslint-disable no-unused-vars */
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-indigo-400">
          Dummy Online Shop
        </h1>
        <p className="mt-6 text-xl sm:text-2xl font-medium leading-relaxed text-gray-700 dark:text-gray-300">
          Welcome to Dummy Online Shop, your one-stop destination for all things
          shopping. We’ve built this platform with modern tools like{" "}
          <strong>ReactJS</strong>, <strong>RTK</strong>, and{" "}
          <strong>DummyJson API</strong> to provide you with a seamless shopping
          experience.
        </p>

        <div className="mt-12 px-4 sm:px-6 md:px-12">
          <p className="text-lg sm:text-xl dark:text-gray-50 mt-6 font-semibold leading-relaxed">
            Our mission is simple: to provide you with a wide range of products
            at your fingertips. We aim to make your online shopping experience
            easy, secure, and enjoyable. Whether you are looking for
            electronics, fashion, or home goods, you will find it all here!
          </p>
        </div>

        {/* Who Am I Section */}
        <div className="mt-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg py-8">
          <h2 className="text-2xl font-semibold text-blue-500">Who Am I?</h2>
          <p className="text-lg mt-6 text-gray-700 dark:text-gray-300 font-medium max-w-3xl mx-auto">
            Hello, I’m <strong>Min Khant Aung</strong>, a passionate web
            developer and creator of this online shop. I specialize in building
            responsive websites and modern web applications using the latest
            technologies.
          </p>
          <p className="text-lg mt-6 text-gray-700 dark:text-gray-300 font-medium max-w-3xl mx-auto">
            This project is one of my personal endeavors to improve my skills
            with <strong>ReactJS</strong>, <strong>Redux Toolkit</strong>, and{" "}
            <strong>API integration</strong>. I enjoy solving problems with code
            and creating solutions that make a difference.
          </p>
          <p className="text-lg mt-6 text-gray-700 dark:text-gray-300 font-medium max-w-3xl mx-auto">
            Outside of coding, I love exploring new technologies, experimenting
            with design, and continuously pushing myself to learn and grow. Web
            development is not just a career for me—it's a passion.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-500 dark:bg-gradient-to-r dark:from-indigo-700 dark:via-purple-800 dark:to-blue-900 text-white rounded-lg shadow-lg py-8">
          <h2 className="text-2xl font-semibold text-center">
            Features of Dummy Online Shop:
          </h2>
          <ul className="list-disc pl-6 mt-6 space-y-2 text-lg sm:text-xl max-w-3xl mx-auto">
            <li>Browse through a vast collection of high-quality products</li>
            <li>Easy and intuitive product search and filtering options</li>
            <li>Seamless shopping cart experience with secure checkout</li>
            <li>
              Responsive design to ensure a smooth shopping experience on all
              devices
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
