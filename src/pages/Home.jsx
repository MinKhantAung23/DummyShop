/* eslint-disable no-unused-vars */
import React from "react";
import ContainerLayout from "../layout/ContainerLayout";
import GridLayout from "../layout/GridLayout";
import CarouselSlide from "../components/homeComponents/CarouselSlide";
import ProductSample from "../components/homeComponents/ProductSample";
import HeroSection from "../components/homeComponents/HeroSection";

const Home = () => {
  return (
    <ContainerLayout className="">
      <HeroSection />
      <CarouselSlide />
      <ProductSample />
    </ContainerLayout>
  );
};

export default Home;
