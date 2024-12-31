/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Rating from "../rating/Rating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/features/cartSlice";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../store/features/favoriteSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProductDetailCard = ({ productDetail }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorite.favorites);

  const isFavorite = favorites.find(
    (favorite) => favorite.id === productDetail.id
  );

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(productDetail));
    toast.success("Product added to cart");
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();

    if (isFavorite) {
      dispatch(removeFromFavorite(productDetail));
      toast.error("Product removed from favorite");
    } else {
      dispatch(addToFavorite(productDetail));
      toast.success("Product added to favorite");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-6 flex justify-center items-center bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
            <img
              src={productDetail?.thumbnail}
              alt={productDetail?.title}
              className="w-full h-auto max-w-xs rounded-lg shadow-lg transform transition-transform hover:scale-105"
            />
          </div>

          <div className="lg:w-1/2 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {productDetail?.title}
              </h1>
              <button
                onClick={toggleFavorite}
                className="text-xl text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors"
              >
                {isFavorite ? (
                  <i className="fas fa-heart text-red-500"></i>
                ) : (
                  <i className="far fa-heart"></i>
                )}
              </button>
            </div>

            <p className="text-sm text-white bg-orange-500 py-1 px-3 rounded-full w-fit mt-4">
              {productDetail?.category}
            </p>

            <div className="flex items-center mt-4">
              <Rating rate={productDetail?.rating} />
              <p className="ml-3 text-gray-600 dark:text-gray-300 text-sm">
                {productDetail?.rating} / 5
              </p>
            </div>
            <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
              Brand: {productDetail?.brand || "Unknown"}
            </p>

            <div className="mt-6">
              <p className="text-3xl font-bold text-red-600">
                ${productDetail?.price}
              </p>
              {productDetail?.discountPercentage && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {productDetail?.discountPercentage}% Off
                </p>
              )}
            </div>

            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {productDetail?.description}
            </p>

            <div className="mt-6 flex gap-4">
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg font-medium transition-transform transform hover:scale-105"
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigate("/products")}
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-lg shadow-lg font-medium transition-transform transform hover:scale-105"
              >
                View All Products
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Additional Information
        </h2>
        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
          <li>
            <strong>Tags:</strong> {productDetail?.tags?.join(", ") || "None"}
          </li>
          <li>
            <strong>Shipping:</strong>{" "}
            {productDetail?.shippingInformation || "N/A"}
          </li>
          <li>
            <strong>Warranty:</strong>{" "}
            {productDetail?.warrantyInformation || "No warranty"}
          </li>
          <li>
            <strong>Return Policy:</strong>{" "}
            {productDetail?.returnPolicy || "N/A"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailCard;
