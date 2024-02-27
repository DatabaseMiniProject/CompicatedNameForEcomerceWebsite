import React from "react";
import ProductsPage from "./AllProducts";
import { useLocation } from "react-router-dom";

export default function PageSelector() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  if (path === "men") return <ProductsPage category={path}/>;
  else if (path === "women") return <ProductsPage category={path}/>;
}
