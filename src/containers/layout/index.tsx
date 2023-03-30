import React from "react";
import Header from "../header";
import MainPage from "../../pages/main";
import Footer from "../footer";
import { Route, Routes } from "react-router-dom";
import CoinPage from "../../pages/coinPage";
import ErrorPage from "../../pages/errorPage";

const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"coin/:id"} element={<CoinPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
