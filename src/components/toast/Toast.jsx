/* eslint-disable no-unused-vars */
import React from "react";
import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      position="top-center"
      toasterOptions={{ duration: 3000 }}
      zIndex={10000}
      reverseOrder={false}
    />
  );
};

export default Toast;
