import { useState } from "react";
import ContainerLayout from "../layout/ContainerLayout";
import EmptyCartImage from "../assets/empty-cart.svg";
import { Pagination } from "flowbite-react";
import CartCard from "../components/cart/CartCard";
import OrderSummary from "../components/cart/OrderSummary";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const limit = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const cart = useSelector((state) => state.cart.cartData);

  const totalItems = cart?.products?.length || 0;
  const totalPages = Math.ceil(totalItems / limit);

  const currentItems = cart?.products.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  const handleBack = () => navigate("/products");

  return (
    <ContainerLayout className="py-12">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">
          Your Shopping Cart
        </h1>

        {totalItems === 0 ? (
          <div className="flex flex-col items-center mt-12">
            <img src={EmptyCartImage} alt="Empty Cart" className="w-64 h-64" />
            <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mt-6">
              Your cart is empty
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Looks like you haven’t added any items yet.
            </p>
            <button
              onClick={handleBack}
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-500 transition"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            <div className="col-span-2">
              <div className="space-y-6">
                {currentItems.map((item) => (
                  <CartCard key={item.id} item={item} />
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
                />
              </div>
            </div>

            <OrderSummary total={cart.totalAmount} />
          </div>
        )}
      </div>
    </ContainerLayout>
  );
};

export default Cart;
