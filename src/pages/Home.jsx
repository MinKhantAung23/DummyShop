/* eslint-disable no-unused-vars */
import React from "react";
import ContainerLayout from "../layout/ContainerLayout";
import GridLayout from "../layout/GridLayout";
import CarouselSlide from "../components/homeComponents/CarouselSlide";
import ProductSample from "../components/homeComponents/ProductSample";

const Home = () => {
  return (
    <ContainerLayout className="">
      <CarouselSlide />
      <ProductSample />
    </ContainerLayout>
  );
};

export default Home;
