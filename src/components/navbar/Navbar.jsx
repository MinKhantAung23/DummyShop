/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Badge, Button } from "flowbite-react";
import { useSelector } from "react-redux";
import Logo from "../../assets/ecommerce.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const cart = useSelector((state) => state.cart.cartData);

  const cartLength = cart?.totalQuantity;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        localStorage.setItem("darkMode", "true");
      } else {
        localStorage.removeItem("darkMode");
      }
      return newMode;
    });
  };
  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="dark:bg-gray-800 dark:text-white duration-300 shadow-lg ">
      <div>
        <div className="flex justify-between items-center h-16 px-4 py-10">
          <div className="flex-shrink-0">
            <Link
              to={"/"}
              className="text-xl font-bold bg-gradient-to-tr from-gray-100 to-gray-200 dark:text-gray-600 flex items-center shadow-md py-2 px-3 rounded-lg hover:bg-gray-200 dark:hover:shadow-xl dark:hover:bg-black duration-300"
            >
              Dummy
              <img src={Logo} alt="logo" className="ml-1 size-6" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink
              to={"/"}
              className="hover:bg-gray-200 dark:hover:text-gray-600 font-semibold text-lg px-3 py-2 rounded-md"
            >
              Home
            </NavLink>
            <NavLink
              to={"/products"}
              className="hover:bg-gray-200 dark:hover:text-gray-600 font-semibold text-lg px-3 py-2 rounded-md"
            >
              Products
            </NavLink>
            <NavLink
              to={"/about"}
              className="hover:bg-gray-200 dark:hover:text-gray-600 font-semibold text-lg px-3 py-2 rounded-md"
            >
              About
            </NavLink>
            <NavLink
              to={"/favorite"}
              className="hover:bg-gray-200 dark:hover:text-gray-600 px-3 py-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </NavLink>
            <NavLink
              to={"/cart"}
              className="hover:bg-gray-200 dark:hover:text-gray-600 px-3 py-2 rounded-md relative"
            >
              <Badge
                color="secondary"
                className="bg-blue-500 rounded-full absolute -top-2 -right-1"
                size="sm"
              >
                {cartLength}
              </Badge>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 2M7 13L5.6 5M7 13h10M10 21h4M12 17h0M15 5h0"
                />
              </svg>
            </NavLink>
            <button
              onClick={toggleDarkMode}
              className="ml-4 px-4 py-2  dark:text-white rounded duration-300"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center ">
            <NavLink
              to={"/favorite"}
              className="hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </NavLink>
            <NavLink
              to={"/cart"}
              className="hover:bg-gray-200 px-3 py-2 ms-1 rounded-md"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 2M7 13L5.6 5M7 13h10M10 21h4M12 17h0M15 5h0"
                />
              </svg>
            </NavLink>
            <button
              onClick={toggleDarkMode}
              className="ms-1 px-2 py-2 dark:text-white rounded duration-300"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              )}
            </button>

            <button
              onClick={toggleBtn}
              className="text-black dark:text-gray-50 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-transform duration-300 ease-in-out"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-8 ms-3 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-90" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-8 ms-3 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu  */}
      <div>
        <div
          className={`md:hidden px-2 bg-gray-50 pt-2 pb-3 space-y-1 sm:px-3 transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <NavLink
            to={"/"}
            className="block font-semibold text-lg px-3 py-2 rounded-md text-black  hover:bg-gray-200"
          >
            Home
          </NavLink>
          <NavLink
            to={"/products"}
            className="block font-semibold text-lg px-3 py-2 rounded-md text-black hover:bg-gray-200"
          >
            Product
          </NavLink>
          <NavLink
            to={"/about"}
            className="block font-semibold text-lg px-3 py-2 rounded-md text-black hover:bg-gray-200"
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
