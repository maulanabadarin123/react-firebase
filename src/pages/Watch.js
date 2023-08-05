import React from "react";
import Products from "../components/Products";
import Banner from "../components/Banner";


export default function Watch() {


  return (
    <div className="mt-[100px] container-lg text-white">
      <Banner />
      <h1 className="px-5 text-2xl md:text-4xl fw-bold">See Our Collection</h1>
      <p className="px-5 text-xl my-2">Get special discount up to 60% for TODAY</p>
      <Products />
    </div>
  );
}
