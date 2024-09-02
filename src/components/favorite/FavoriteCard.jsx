/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaHeartBroken } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromFavorite } from "../../store/features/favoriteSlice";
import { useNavigate } from "react-router-dom";

const FavoriteCard = ({
  favoriteProduct: { id, title, thumbnail, description },
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    navigate(`/products/${id}`);
  };
  const handleFavoriteRemove = (e) => {
    e.stopPropagation();
    dispatch(removeFromFavorite({ id, title, thumbnail, description }));
  };
  return (
    <div
      onClick={handleNavigate}
      className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer border border-gray-200 hover:shadow-lg"
    >
      <img className="w-full h-48 object-cover" src={thumbnail} alt={title} />
      <div className="px-6 py-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="font-bold text-xl text-gray-800 dark:text-gray-50">
            {title}
          </h2>
          <button
            onClick={handleFavoriteRemove}
            className="text-red-500 hover:text-red-600 focus:outline-none ms-3"
          >
            <FaHeartBroken className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
