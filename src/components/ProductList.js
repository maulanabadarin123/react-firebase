import React from "react";
import Products from "./Products";

export default function ProductList() {
  return (
    <div className="mt-[100px] container-lg text-white">
      <h1 className="px-5 text-4xl fw-bold">Eid Special Offers</h1>
      <p className="px-5 text-xl my-2">Get special discount up to 60%</p>
      <Products />
    </div>
  );
}
