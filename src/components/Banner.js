import React from "react";

export default function Banner() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 items-center mx-auto">
        <div className="p-4">
          <blockquote className="text-xl md:text-3xl font-semibold italic text-center text-slate-200 mt-4">
            Time is
            <span className="mx-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block">
              <span className="relative text-white">precious,</span>
            </span>
            make every second count with our stylish watches.
          </blockquote>
        </div>
        <div className="p-4">
          <img
            className="shadow-md rounded-lg shadow-black"
            src="https://i.ibb.co/X7mg3Ty/ca6c39e4dc724d7233680b9ae0cd69ca-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
