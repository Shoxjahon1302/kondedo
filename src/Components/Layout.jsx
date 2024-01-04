import React from "react";
import Header from "./HOME-PAGE/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
