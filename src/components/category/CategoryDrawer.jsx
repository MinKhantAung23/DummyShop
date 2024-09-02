/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Alert, Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useGetCategoryQuery } from "../../store/services/endpoints/categoryEndpoints";
import { Link } from "react-router-dom";
import LoadingSpinner from "../spinner/LoadingSpinner";
import { HiInformationCircle } from "react-icons/hi";

const CategoryDrawer = ({ isOpen, handleClose }) => {
  const { data: categories, isLoading, error } = useGetCategoryQuery();

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
    <Drawer open={isOpen} onClose={handleClose}>
      <Drawer.Header title="CATGORIES MENU" titleIcon={() => <></>} />
      <Drawer.Items>
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          className="[&>div]:bg-transparent [&>div]:p-0"
        >
          <div className="flex h-full flex-col justify-between py-2">
            <div>
              {categories?.map((category) => (
                <Link
                  key={category.slug}
                  to={`/category/${category.slug}`}
                  className="block py-3 px-4 text-base font-medium text-gray-700 dark:text-gray-50 hover:text-blue-500 hover:bg-gray-700"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </Sidebar>
      </Drawer.Items>
    </Drawer>
  );
};

export default CategoryDrawer;
