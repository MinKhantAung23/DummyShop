/* eslint-disable no-unused-vars */
import React from "react";
import MainLayout from "./layout/MainLayout";
import Header from "./components/header/Header";
import Foot from "./components/footer/Foot";
import Toast from "./components/toast/Toast";
import NetworkStatus from "./components/networkStatus/NetworkStatus";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900">
      <Header />
      <Toast />
      <NetworkStatus />
      <MainLayout />
      <Foot />
    </div>
  );
};

export default App;
