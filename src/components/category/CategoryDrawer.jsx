/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Alert, Drawer, Sidebar } from "flowbite-react";
import { useGetCategoryQuery } from "../../store/services/endpoints/categoryEndpoints";
import { Link } from "react-router-dom";
import LoadingSpinner from "../spinner/LoadingSpinner";
import { HiInformationCircle } from "react-icons/hi";

const CategoryDrawer = ({ isOpen, handleClose }) => {
  const { data: categories, isLoading, error } = useGetCategoryQuery();

  if (isLoading) return <LoadingSpinner />; // Spinner during loading
  if (error)
    return (
      <div>
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">Error:</span> Something went wrong.
          Please try again.
        </Alert>
      </div>
    );

  return (
    <Drawer open={isOpen} onClose={handleClose} size="lg">
      <Drawer.Header title="Categories Menu" />
      <Drawer.Items>
        <Sidebar
          aria-label="Sidebar with categories"
          className="bg-white dark:bg-gray-800rounded-md shadow-lg"
        >
          <div className="flex flex-col space-y-2">
            {categories?.map((category) => (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className="block py-2 px-4 text-lg font-medium text-gray-800 dark:text-gray-50 hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200 rounded-md"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </Sidebar>
      </Drawer.Items>
    </Drawer>
  );
};

export default CategoryDrawer;
