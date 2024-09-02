/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Pagination as FlowbitePagination } from "flowbite-react";

const Pagination = ({ page, setPage, totalPages, limit }) => {
  const onPageChange = (page) => setPage(page);
  return (
    <div className="flex overflow-x-auto sm:justify-center mt-10">
      <FlowbitePagination
        currentPage={page}
        totalPages={totalPages / limit}
        onPageChange={onPageChange}
        showIcons
        // size="sm"
      />
    </div>
  );
};

export default Pagination;
