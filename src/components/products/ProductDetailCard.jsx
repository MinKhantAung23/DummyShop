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
import { useToasterStore } from "react-hot-toast/headless";
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
          <img
            src={productDetail?.thumbnail}
            alt={productDetail?.title}
            className="w-full h-auto  object-cover rounded-lg shadow-md hover:shadow-lg border shadow-blue-50 "
          />
        </div>

        <div className="md:w-1/2 md:pl-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold mb-4 dark:text-white">
              {productDetail?.title}
            </h1>
            <button onClick={toggleFavorite}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-7 ${
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
          <p className="text-lg text-gray-100 mb-4  w-fit rounded-lg px-3 py-1 bg-orange-400 ">
            {productDetail?.category}
          </p>
          <div className="flex justify-start items-center mt-2 mb-3">
            <Rating rate={productDetail?.rating} />
            <p className="text-gray-600 text-lg font-medium ms-4">
              {productDetail?.rating}
            </p>
          </div>

          {productDetail?.brand && (
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-50 mb-4">
              Brand :{" "}
              <span className="font-medium">{productDetail?.brand}</span>
            </p>
          )}
          <div className="flex justify-start items-center space-x-4 my-2">
            <p className="mt-auto text-red-500 font-bold text-4xl">
              ${productDetail?.price}
            </p>
            <p className="dark:text-gray-400 text-lg ">
              -{productDetail?.discountPercentage}% off
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-50 mb-6 mt-3 text-lg font-medium">
            {productDetail?.description}
          </p>
          <p className="text-lg text-gray-600 mb-4 dark:text-gray-50 font-semibold">
            Stock : {productDetail?.stock}
            <span className="text-gray-800 dark:text-gray-50 ml-2 ">
              ( {productDetail?.availabilityStatus})
            </span>
          </p>

          <div className="flex justify-between">
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate("/products")}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              View all products
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold dark:text-gray-50 mb-4">
          Additional Information
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-800 dark:text-gray-50">
          <li className="text-lg font-medium">
            Tags :{" "}
            <span className="font-normal">
              {productDetail?.tags.join(", ")}
            </span>
          </li>
          <li className="text-lg font-medium">
            Shipping:{" "}
            <span className="font-normal">
              {productDetail?.shippingInformation}
            </span>
          </li>
          {productDetail?.warrantyInformation ? (
            <li className="text-lg font-medium">
              Warranty :{" "}
              <span className="font-normal">
                {productDetail?.warrantyInformation}
              </span>
            </li>
          ) : (
            <li className="text-lg font-medium">No warranty</li>
          )}
          <li className="text-lg font-medium">
            Return:{" "}
            <span className="font-normal">{productDetail?.returnPolicy}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailCard;
