/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "../rating/Rating";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/features/cartSlice";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../store/features/favoriteSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorite.favorites);

  const isFavorite = favorites.find((favorite) => favorite.id === product.id);

  const handleDetail = () => {
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    toast.success("Product added to cart");
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();

    if (isFavorite) {
      dispatch(removeFromFavorite(product));
      toast.error("Product removed from favorites");
    } else {
      dispatch(addToFavorite(product));
      toast.success("Product added to favorites");
    }
  };

  return (
    <div onClick={handleDetail}>
      <div className="border p-4 h-full flex flex-col rounded-lg shadow-md shadow-blue-50 hover:shadow-lg">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover mb-2 border-b-2"
        />
        <div className="">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-semibold dark:text-white">
              {product.title}
            </h2>
            <button onClick={toggleFavorite}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-5 ${
                  isFavorite ? "fill-red-500" : "fill-gray-50"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-start space-x-4 mt-2">
            <p className="mt-auto  text-red-500 text-lg">${product.price}</p>
            <p className="dark:text-gray-400">
              -{product.discountPercentage}% off
            </p>
          </div>
          <div className="flex justify-start items-center mt-2 mb-3">
            <Rating rate={product.rating} />
            <p className="text-gray-500 text-sm font-medium ms-4">
              {product.rating}
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-auto">
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center bg-black dark:bg-white hover:bg-gray-600 text-white dark:text-black font-semibold py-1 px-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
