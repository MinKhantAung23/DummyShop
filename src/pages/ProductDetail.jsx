/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../store/services/endpoints/productEndpoints";
import ContainerLayout from "../layout/ContainerLayout";
import ProductDetailCard from "../components/products/ProductDetailCard";
import BreadcrumbComponent from "../components/breadcrumb/BreadcrumbComponent";
import LoadingSpinner from "../components/spinner/LoadingSpinner";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

const ProductDetail = () => {
  const { id } = useParams();

  const {
    data: productDetail,
    isLoading,
    isFetching,
    error,
  } = useGetSingleProductQuery(id);

  const breadcrumbItems = [
    { name: "Product", href: "/products" },
    { name: "Product Detail" },
  ];

  if (isLoading || isFetching) return <LoadingSpinner />;

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
    <ContainerLayout className="py-10">
      <BreadcrumbComponent items={breadcrumbItems} />
      <ProductDetailCard productDetail={productDetail} />
    </ContainerLayout>
  );
};

export default ProductDetail;
