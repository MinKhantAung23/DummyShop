/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../store/features/cartSlice";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
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
        dispatch(removeFromCart(item));
      }
    });
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };
  const handleDecreaseQuantity = (item) => {
    if (item.quantity === 1) handleRemoveItem(item);
    dispatch(decreaseQuantity(item));
  };

  const handleDelete = (item) => handleRemoveItem(item);
  return (
    <div
      key={item.id}
      className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md group relative"
    >
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-20 h-20 rounded-lg object-cover"
      />
      <div className="flex-1 ml-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {item.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          ${item.price} x {item.quantity}
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
          onClick={() => handleDecreaseQuantity(item)}
        >
          -
        </button>
        <span className="text-gray-900 dark:text-white">{item.quantity}</span>
        <button
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
          onClick={() => handleIncreaseQuantity(item)}
        >
          +
        </button>
      </div>

      <button
        onClick={() => handleDelete(item)}
        className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default CartCard;
