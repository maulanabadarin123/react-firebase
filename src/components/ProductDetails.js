import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
import { FaShoppingCart, FaMoneyBill } from "react-icons/fa";

export default function ProductDetails() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => setDetail(data))
      .catch((err) => console.error(err));
  }, [id]);

  const found = detail?.find((details) => details.id === id);
  console.log(found);

  return (
    <div className="container-lg my-[100px] p-4">
      {found && (
        <>
          <div className="row mb-3">
            <div className="col-12 col-md-8">
              <h1 className="text-white text-xl lg:text-2xl fw-bold">{found.title}</h1>
            </div>
          </div>
          <div className="row justify-between align-items-center mb-3">
            <div className="col-6 col-md-8">
              <p className="text-[12px] text-slate-200 uppercase my-2">
                <span className="text-slate-400">BRAND: </span>
                {found.brand}
              </p>
            </div>
            <div className="col-4 col-md-2 flex justify-between text-white cursor-pointer">
              <p className="text-sm text-slate-400">Share:</p>
              <AiOutlineFacebook size={25} />
              <AiOutlineTwitter size={25} />
              <AiOutlineWhatsApp size={25} />
            </div>
          </div>

          <div className="row justify-center ">
            <div className="col-10 col-md-4">
              <img
                src={hovered ? found.image2 : found.image1}
                alt="product img"
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
              />
            </div>
            <div className="col-10 col-md-5">
              <div className="rounded-md sm:mt-3 md:mt-0 p-4 text-slate-200 bg-[#181818]">
                <h1 className="text-xl">
                  Get Discount up to
                  <span className="mx-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block">
                    <span className="relative text-white fw-bold text-2xl p-2">85%</span>
                  </span>
                  TODAY!
                </h1>
              </div>
              <h1 className="text-yellow-500 my-3 text-3xl fw-bolder">${found.price}</h1>
              <div className="rounded-md mb-3 md:mb-0 bg-gray-900 text-slate-200 text-sm p-4">
                <h1 className="text-md uppercase mb-2 text-white fw-semibold">descripsion:</h1>
                <p>{found.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="hover:bg-yellow-500  font-semibold py-2 px-4 border text-white border-yellow-500 hover:border-transparent rounded w-1/2">
                  <FaShoppingCart className="inline-block mr-2" />
                  Add to Cart
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded w-1/2">
                  <FaMoneyBill className="inline-block mr-2" />
                  Buy Now
                </button>
              </div>
            </div>
            <div className="col-10 col-md-3 text-white">
              <div className="bg-[#181818] p-3 rounded-md">
                <h1 className="text-lg text-yellow-500 fw-semibold">100% New Original</h1>
                <p className="text-white text-sm">Our product 100% new and original product.</p>
                <div className="my-2">
                  <hr />
                </div>
                <div className="flex justify-between">
                  <h1 className="text-lg text-yellow-500 fw-semibold">3 days Returns</h1>
                  <h1 className="text-sm text-slate-300 fw-bold">INFO</h1>
                </div>
                <p className="text-white text-sm">You have 3 days to return the product😊</p>
              </div>
              <div className="my-4 flex text-slate-300">
                <div>
                  <MdOutlineTipsAndUpdates size={50} />
                </div>
                <div className="ml-3">
                  <h1 className="text-lg text-yellow-500 fw-semibold">Tips for Choosing a Watch</h1>
                  <p className="text-sm my-1 text-slate-500">
                    Find shopping tips and the latest information about us
                  </p>
                  <h1 className="text-xl text-slate-300 fw-bold cursor-pointer">SEE MORE</h1>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
