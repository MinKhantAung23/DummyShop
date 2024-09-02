/* eslint-disable no-unused-vars */
import { Spinner } from "flowbite-react";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 h-screen overflow-hidden">
      <Spinner aria-label="Large spinner example" size="lg" />
      <span className="ms-2 animate-pulse text-lg font-semibold">
        loading please wait...
      </span>
    </div>
  );
};

export default LoadingSpinner;
