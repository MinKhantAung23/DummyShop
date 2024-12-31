/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useProductsQuery } from "../store/services/endpoints/productEndpoints";
import { useSearchProductsQuery } from "../store/services/endpoints/productEndpoints";
import ProductCard from "../components/products/ProductCard";
import ContainerLayout from "../layout/ContainerLayout";
import GridLayout from "../layout/GridLayout";
import Search from "./Search";
import Pagination from "../components/pagination/Pagination";
import { Alert, Button } from "flowbite-react";
import CategoryDrawer from "../components/category/CategoryDrawer";
import BreadcrumbComponent from "../components/breadcrumb/BreadcrumbComponent";
import LoadingSpinner from "../components/spinner/LoadingSpinner";
import { HiInformationCircle } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = parseInt(searchParams.get("page")) || 1;
  const limitParam = parseInt(searchParams.get("limit")) || 20;

  const [page, setPage] = useState(pageParam);
  const [limit, setLimit] = useState(limitParam);

  useEffect(() => {
    setSearchParams({ page, limit });
  }, [page, limit, setSearchParams]);

  const {
    data: products,
    isLoading: productLoading,
    error: productError,
  } = useProductsQuery({ page, limit });

  const [search, setSearch] = useState("");

  const {
    data: searchProducts,
    isLoading: searchLoading,
    error: searchError,
  } = useSearchProductsQuery(search);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const productsDisplay = search ? searchProducts.products : products?.products;

  const breadcrumbItems = [{ name: "Product", href: "/products" }];

  if (productLoading || searchLoading) return <LoadingSpinner />;
  if (productError || searchError)
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
      <BreadcrumbComponent items={breadcrumbItems} />
      <Search search={search} handleSearch={handleSearch} />
      <div className="flex justify-between items-center ">
        <h1 className="text-3xl font-bold my-4 dark:text-white">Products</h1>
        <Button onClick={() => setIsOpen(true)}>Category</Button>
        <CategoryDrawer isOpen={isOpen} handleClose={handleClose} />
      </div>

      {productsDisplay?.length > 0 ? (
        <GridLayout>
          {productsDisplay?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </GridLayout>
      ) : (
        <div className="text-center text-gray-500 mt-4">
          No products match your search.
        </div>
      )}

      <Pagination
        page={page}
        setPage={setPage}
        totalPages={Math.ceil(products?.total / limit)}
      />
    </ContainerLayout>
  );
};

export default Products;
