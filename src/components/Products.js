import React from "react";
import FetchData from "../components/FetchData";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Products() {
  const data = FetchData();
  // console.log(data);

  return (
    <div className="row g-4 gutter-1 mt-3 mb-5 p-4 justify-center">
      {data.length > 0 &&
        data.map((data) => (
          <div key={data.id} className="mx-3 col-10 col-md-2 p-3 rounded-lg bg-[#181818] shadow-lg">
            <Link to={`/products/${data.id}`}>
              <div>
                <div className="border-b border-yellow-500 my-2">
                  <img
                    className="hover-image hover:ease-in-out hover:duration-500"
                    src={data.image1}
                    alt={data.title}
                  />
                </div>

                <div className="text-slate-300 fw-semibold text-md mx-2">
                  {data.title.length > 30 ? data.title.substr(0, 30) + "..." : data.title}
                </div>
                <div className="mx-2 text-yellow-500 text-lg fw-bold">${data.price}</div>
                <div className="flex justify-between items-center my-2 text-yellow-600">
                  <div className="text-white rounded-xl px-4 py-1 bg-yellow-600 cursor-pointer hover:opacity-75">
                    Add to cart
                  </div>
                  <AiOutlineShoppingCart size={25} />
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}
