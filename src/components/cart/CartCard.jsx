/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Rating from "../rating/Rating";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../store/features/cartSlice";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const CartCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Product removed from cart");
        dispatch(removeFromCart(product));
      }
    });
  };

  const handleIncreaseQuantity = (product) => {
    dispatch(increaseQuantity(product));
  };
  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product));
  };
  return (
    <div className="flex flex-col sm:flex-row border-2 rounded-md shadow-md my-4 hover:shadow-lg ">
      <img
        src={product.thumbnail}
        className="sm:w-2/5 w-[200px] h-[200px] sm:h-auto mx-auto object-cover"
        alt=""
      />
      <div className="flex flex-col items-start justify-center sm:w-3/5 p-4">
        <h2 className="text-lg md:text-xl font-bold dark:text-gray-50">
          {product.title}
        </h2>
        <div className="flex justify-center items-center mt-4">
          <p className="text-xl font-bold dark:text-gray-50 text-start">
            ${(product.price * product.quantity).toFixed(2)}
          </p>
          <p className="text-sm font-semibold text-red-500 ms-3">
            -{product.discountPercentage}% off
          </p>
        </div>
        <div className="flex items-center mt-4">
          <button
            className={`bg-gray-200 text-gray-600 px-3 py-1 rounded-md mr-4 ${
              product.quantity <= 1 && "opacity-45 cursor-not-allowed"
            }`}
            disabled={product.quantity <= 1}
            onClick={() => handleDecreaseQuantity(product)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <span className="text-gray-800 dark:text-gray-50 font-bold text-xl">
            {product.quantity}
          </span>
          <button
            onClick={() => handleIncreaseQuantity(product)}
            className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md ml-4"
          >
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <button
          onClick={() => handleRemoveItem(product)}
          className="text-red-500 md:mt-auto mt-8 md:ms-auto hover:text-red-700 text-center border border-red-500 rounded px-3 py-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 inline-block me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
