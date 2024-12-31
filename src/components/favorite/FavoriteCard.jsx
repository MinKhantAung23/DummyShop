/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromFavorite } from "../../store/features/favoriteSlice";
import { useNavigate } from "react-router-dom";
import { FaHeartBroken } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

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

        dispatch(removeFromFavorite({ id, title, thumbnail, description }));
      }
    });
  };

  return (
    <div
      onClick={handleNavigate}
      className="max-w-sm rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-transparent bg-gradient-to-r from-gray-400 via-pink-200 to-gray-50 dark:bg-gradient-to-r dark:from-gray-400 dark:via-pink-200 dark:to-gray-50"
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover rounded-t-xl"
          src={thumbnail}
          alt={title}
        />
        <button
          onClick={handleFavoriteRemove}
          className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 focus:outline-none rounded-full p-2"
        >
          <FaHeartBroken />
        </button>
      </div>
      <div className="px-6 py-6 h-full bg-white dark:bg-gray-800 rounded-b-xl">
        <div className="mb-3">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-50">
            {title}
          </h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-200 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FavoriteCard;
