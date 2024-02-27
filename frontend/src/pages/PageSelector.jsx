import React from "react";
import ProductsPage from "./AllProducts";
import { useLocation } from "react-router-dom";

export default function PageSelector() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  return <ProductsPage category={path}/>;
}
