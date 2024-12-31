import React from "react";
import Navigation from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
function sharedlayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default sharedlayout;
