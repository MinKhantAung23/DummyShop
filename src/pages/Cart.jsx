/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ContainerLayout from "../layout/ContainerLayout";
import CartCard from "../components/cart/CartCard";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../assets/empty-cart.svg";
import { useNavigate } from "react-router-dom";
import { Pagination } from "flowbite-react";
import { clearCart } from "../store/features/cartSlice";
import CartTotalForm from "../components/cart/CartTotalForm";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();

  const limit = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = cart?.products?.length;
  const totalPages = Math.ceil(totalItems / limit);

  const currentItems = cart?.products.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );
  const handleBack = () => {
    navigate("/products");
  };

  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <ContainerLayout className="">
      <div className="py-10">
        <div className="flex items-center space-x-4 text-black dark:text-white">
          <h1 className=" text-2xl font-bold">Your Cart</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
        {cart?.products.length <= 0 ? (
          <div className="flex flex-col justify-center items-center mt-4">
            <img src={EmptyCart} className="w-full h-[300px]" alt="" />
            <h1 className="mt-8 text-lg font-bold text-red-500 uppercase">
              Your cart is empty!
            </h1>
            <button
              onClick={handleBack}
              className="px-4 py-3 uppercase bg-blue-500 font-semibold rounded-lg text-gray-50 mt-4"
            >
              Go to Shopping
            </button>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="col-span-2 ">
                {currentItems.map((product) => (
                  <CartCard key={product.id} product={product} />
                ))}
              </div>
              <div className=" md:ms-4">
                <CartTotalForm total={cart.totalAmount} />
                <div className="flex justify-center gap-4 mt-6">
                  <button
                    onClick={handleClear}
                    className="px-3 py-2  bg-red-500 font-semibold rounded-lg text-gray-50 mt-4"
                  >
                    Clear Cart
                  </button>
                  <button
                    onClick={handleBack}
                    className="px-3 py-2  bg-blue-500 font-semibold rounded-lg text-gray-50 mt-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
              />
            </div>
          </div>
        )}
      </div>
    </ContainerLayout>
  );
};

export default Cart;
