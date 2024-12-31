/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Carousel } from "flowbite-react";
import { useProductsQuery } from "../../store/services/endpoints/productEndpoints";
import LoadingSpinner from "../spinner/LoadingSpinner";
import { Link } from "react-router-dom";

const CarouselSlide = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data: products, isLoading } = useProductsQuery({ page, limit });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-[500px] mt-4 mb-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
      <Carousel slideInterval={5000} indicators={false}>
        {products?.products.map((product) => (
          <div key={product.id} className="relative w-full h-full">
            <img
              src={product.thumbnail}
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt={product.title}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
              <h2 className="text-white text-lg md:text-xl font-semibold">
                {product.title}
              </h2>
              <p className="text-gray-200 text-sm md:text-base line-clamp-2">
                {product.description}
              </p>
              <Link
                to={`/products/${product.id}`}
                className="mt-2 px-4 py-2 text-center text-sm font-medium text-black bg-yellow-400 rounded hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-500"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSlide;
