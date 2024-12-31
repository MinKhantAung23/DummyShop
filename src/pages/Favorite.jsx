/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ContainerLayout from "../layout/ContainerLayout";
import GridLayout from "../layout/GridLayout";
import FavoriteCard from "../components/favorite/FavoriteCard";
import { useSelector } from "react-redux";
import FavCard from "../assets/favorite.svg";
import { useNavigate } from "react-router-dom";
import { Pagination } from "flowbite-react";
import { FaHeart } from "react-icons/fa";
import BreadcrumbComponent from "../components/breadcrumb/BreadcrumbComponent";

const Favorite = () => {
  const navigate = useNavigate();
  const favorite = useSelector((state) => state.favorite);

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;

  const totalItems = favorite?.favorites.length;
  const totalPages = Math.ceil(totalItems / limit);

  const currentItems = favorite?.favorites.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  const handleBack = () => {
    navigate("/products");
  };
  const breadcrumbItems = [
    { name: "Product", href: "/products" },
    { name: "Favorite" },
  ];

  return (
    <ContainerLayout className="py-10">
      <BreadcrumbComponent items={breadcrumbItems} />
      <h1 className="text-3xl font-bold dark:text-gray-50 mb-8">
        Favorites <FaHeart className="inline text-red-500 animate-pulse" />
      </h1>
      {favorite?.favorites.length <= 0 ? (
        <div className="flex flex-col justify-center items-center mt-4">
          <img src={FavCard} className="w-full h-[300px]" alt="" />
          <h1 className="mt-8 text-lg font-bold text-red-500 uppercase">
            Your Favorite is empty!
          </h1>
          <button
            onClick={handleBack}
            className="px-4 py-3 uppercase bg-blue-500 font-semibold rounded-lg text-gray-50 mt-4"
          >
            Go to Shopping
          </button>
        </div>
      ) : (
        <div>
          <GridLayout>
            {currentItems?.map((fav) => (
              <FavoriteCard key={fav.id} favoriteProduct={fav} />
            ))}
          </GridLayout>
          <div className="flex justify-center mt-6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
            />
          </div>
        </div>
      )}
    </ContainerLayout>
  );
};

export default Favorite;
