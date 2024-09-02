/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const GridLayout = ({ children, className = "" }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default GridLayout;
