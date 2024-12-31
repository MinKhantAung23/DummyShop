/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
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
    <div
      onClick={handleDetail}
      className="group flex flex-col bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-52 object-cover transition-transform duration-200 group-hover:scale-105"
        />
        <button
          onClick={toggleFavorite}
          className="absolute top-4 right-4 bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:shadow-md transition-transform transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 ${
              isFavorite ? "fill-red-500" : "fill-gray-400"
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

      <div className="flex flex-col mb-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          {product.title}
        </h2>

        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-red-500">${product.price}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            -{product.discountPercentage}% off
          </p>
        </div>

        <div className="flex items-center  space-x-2">
          <Rating rate={product.rating} />
          <p className="text-sm text-gray-500">{product.rating}</p>
        </div>
      </div>

      <div className="mt-auto">
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 rounded-lg shadow hover:shadow-md transition-transform transform hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
