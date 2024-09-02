/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ContainerLayout from "../layout/ContainerLayout";
import GridLayout from "../layout/GridLayout";
import ProductCard from "../components/products/ProductCard";
import BreadcrumbComponent from "../components/breadcrumb/BreadcrumbComponent";
import Pagination from "../components/pagination/Pagination";
import Search from "./Search";
import CategoryDrawer from "../components/category/CategoryDrawer";
import { Alert, Button } from "flowbite-react";
import { useGetProductsByCategoryQuery } from "../store/services/endpoints/categoryEndpoints";
import { useParams } from "react-router-dom";
import { useSearchProductsQuery } from "../store/services/endpoints/productEndpoints";
import LoadingSpinner from "../components/spinner/LoadingSpinner";
import { HiInformationCircle } from "react-icons/hi";

const Category = () => {
  const { category } = useParams();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 20;
  const {
    data: productsByCategory,
    isLoading: categoryLoading,
    error: categoryError,
  } = useGetProductsByCategoryQuery({ page, limit, category });

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const breadcrumbItems = [
    { name: "Product", href: "/products" },
    { name: `${category} products`, href: `/category/${category}` },
  ];

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const prodctsByCategoryDisplay = productsByCategory?.products?.filter(
    (product) => product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (categoryLoading) return <LoadingSpinner />;
  if (categoryError)
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
      <div>
        <Search search={search} handleSearch={handleSearch} />
        <div className="flex justify-between items-center my-4">
          <h1 className="text-base md:text-3xl font-bold my-4 dark:text-white">
            {category} Products
          </h1>
          <Button onClick={() => setIsOpen(true)}>Category</Button>
          <CategoryDrawer isOpen={isOpen} handleClose={handleClose} />
        </div>
        {prodctsByCategoryDisplay?.length > 0 ? (
          <GridLayout>
            {prodctsByCategoryDisplay?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </GridLayout>
        ) : (
          <div className="text-center text-gray-500 mt-4">
            No products match your search.
          </div>
        )}
      </div>{" "}
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={productsByCategory?.total}
        limit={limit}
      />
    </ContainerLayout>
  );
};

export default Category;
