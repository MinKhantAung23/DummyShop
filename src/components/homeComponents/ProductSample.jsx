/* eslint-disable no-unused-vars */
import React from "react";
import { useProductsQuery } from "../../store/services/endpoints/productEndpoints";
import ContainerLayout from "../../layout/ContainerLayout";
import GridLayout from "../../layout/GridLayout";
import ProductCard from "../products/ProductCard";
import { Link } from "react-router-dom";
import LoadingSpinner from "../spinner/LoadingSpinner";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

const ProductSample = () => {
  const limit = 7;
  const { data: products, isLoading, error } = useProductsQuery(limit);
  if (isLoading) return <LoadingSpinner />;
  if (error)
    return (
      <div>
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">Info alert!</span> Something went wrong
          please try again!
        </Alert>
      </div>
    );
  return (
    <ContainerLayout className="py-10 dark:bg-gray-900">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold dark:text-gray-50">Products</h1>
        <Link to={"/products"} className="text-blue-500 text-lg underline">
          see all
        </Link>
      </div>
      <GridLayout>
        {products?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </GridLayout>
    </ContainerLayout>
  );
};

export default ProductSample;
