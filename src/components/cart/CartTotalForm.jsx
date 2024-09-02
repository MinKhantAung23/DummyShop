/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CartTotalForm = ({ total }) => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    toast.success("Lets go for checkout...");
    navigate("/checkout");
  };
  return (
    <div className="flex flex-col border-2 h-fit py-4 px-3 rounded-lg bg-blue-50 my-4">
      <h3 className="text-2xl font-bold text-center text-blue-600">
        Cart Checkout
      </h3>
      <p className="mt-4 font-bold text-gray-600 text-xl">
        Sub total : <span>${total.toFixed(2)}</span>
      </p>
      <p className="mt-4 font-bold text-gray-600 text-xl">
        Tax (10%) : <span>${(total * 0.1).toFixed(2)}</span>
      </p>
      <p className="mt-4 font-bold text-gray-600 text-2xl">
        Total : <span>${(total * 0.1 + total).toFixed(2)}</span>
      </p>
      <button
        onClick={handleCheckout}
        className="px-3 py-2 uppercase bg-blue-500 font-semibold rounded-lg text-gray-50 mt-4"
      >
        Checkout
      </button>
    </div>
  );
};

export default CartTotalForm;
