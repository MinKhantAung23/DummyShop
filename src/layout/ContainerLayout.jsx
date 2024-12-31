/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ContainerLayout = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-full sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerLayout;
