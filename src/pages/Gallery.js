import React from "react";

export default function Gallery() {
  return (
    <div className="container-lg my-[100px] md:p-4">
      <h2 className="text-3xl text-center text-slate-200 my-10 font-bold">Gallery Collection</h2>
      <div className="mt-10 p-2 grid grid-cols-2 md:grid-cols-4 gap-2 md:p-4">
        <h2 className="text-xl h-15 font-semibold text-yellow-500 md:col-start-4 md:row-start-2 md:flex">
          <span className="self-center">Welcome to DEPOT</span>{" "}
        </h2>
        <div className="h-15 font-bold text-yellow-400 md:col-start-2 md:row-start-2 md:flex">
          <span className="self-end">@depotwatch</span>{" "}
        </div>

        <div className="h-15 bg-blue-300 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('https://www.jamtangan.com/cdn-cgi/image/fit=cover,format=auto/https://assets.jamtangan.com/images/product/seiko/SFK003J1/DETAIL.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
        </div>
        <div className="h-15 bg-blue-300 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3 overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('https://www.jamtangan.com/cdn-cgi/image/fit=cover,format=auto/https://assets.jamtangan.com/images/product/casio/DW-5610Y-9DR/DETAIL1.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
        </div>
        <div className="h-15 bg-blue-300 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('https://www.jamtangan.com/cdn-cgi/image/fit=cover,format=auto/https://assets.jamtangan.com/images/product/fossil/FS5944/DETAIL.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
        </div>
        <div className="h-15 bg-blue-300 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('https://www.jamtangan.com/cdn-cgi/image/fit=cover,format=auto/https://assets.jamtangan.com/images/product/casio/GA-2100PTS-8ADR/DETAIL1.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
        </div>
        <div className="h-15 bg-blue-300 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('https://www.jamtangan.com/cdn-cgi/image/fit=cover,format=auto/https://assets.jamtangan.com/images/product/mido/M005.430.11.061.81/DETAIL.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
        </div>
        <div className="h-15 bg-blue-300 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-2 overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('https://www.jamtangan.com/cdn-cgi/image/fit=cover,format=auto/https://assets.jamtangan.com/images/product/citizen/BY0054-57A/DETAIL.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
        </div>
        <div className="h-15 bg-blue-300 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-4 overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('https://www.jamtangan.com/cdn-cgi/image/fit=cover,format=auto/https://assets.jamtangan.com/images/product/casio/MSG-C150G-3ADR/DETAIL.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
        </div>
        <div className="h-15 bg-blue-300 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('https://www.jamtangan.com/cdn-cgi/image/fit=cover,format=auto/https://assets.jamtangan.com/images/product/guess/GW0203G7/DETAIL.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
        </div>
        <div className="h-15 bg-blue-300 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3 overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('https://www.jamtangan.com/cdn-cgi/image/fit=cover,format=auto/https://assets.jamtangan.com/images/product/casio/BG-169R-8BDR/DETAIL.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
        </div>
        <div className="h-15 bg-blue-300 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3 overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="w-full h-full bg-[url('https://www.jamtangan.com/cdn-cgi/image/fit=cover,format=auto/https://assets.jamtangan.com/images/product/casio/GD-120CM-5DR/DETAIL.jpg')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
}
