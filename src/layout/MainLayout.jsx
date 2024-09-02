/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <section className="flex-grow">
      <Outlet />
    </section>
  );
};

export default MainLayout;
