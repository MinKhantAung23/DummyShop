/* eslint-disable no-unused-vars */
import React from "react";
import { Alert, Carousel } from "flowbite-react";
import { useProductsQuery } from "../../store/services/endpoints/productEndpoints";
import LoadingSpinner from "../spinner/LoadingSpinner";
import { HiInformationCircle } from "react-icons/hi";

const CarouselSlide = () => {
  const { data: products, isLoading } = useProductsQuery();
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-2 mb-4 border-2 rounded-lg shadow-lg">
      <Carousel slideInterval={5000} indicators={true}>
        {products?.products.map((product) => (
          <img
            key={product.id}
            src={product.thumbnail}
            className="w-fit h-full object-cover "
            alt="..."
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSlide;
