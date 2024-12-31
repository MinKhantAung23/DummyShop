/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/features/cartSlice";

const OrderSummary = ({ total }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => navigate("/products");
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md sticky top-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Order Summary
      </h2>
      <div className="flex justify-between text-gray-700 dark:text-gray-400 mb-2">
        <span>Subtotal</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-gray-700 dark:text-gray-400 mb-4">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="border-t border-gray-300 dark:border-gray-600 my-4"></div>
      <div className="flex justify-between text-gray-900 dark:text-white font-bold text-lg">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="mt-6 space-y-4">
        <button
          onClick={handleClear}
          className="w-full px-4 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-400 transition"
        >
          Clear Cart
        </button>
        <button
          onClick={() => navigate("/checkout")}
          className="w-full px-4 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-500 transition"
        >
          Proceed to Checkout
        </button>
        <button
          onClick={handleBack}
          className="w-full px-4 py-3 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white font-medium rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
