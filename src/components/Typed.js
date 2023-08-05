import React from "react";
import { useTypewriter } from "react-simple-typewriter";

export default function Type() {
  const [text] = useTypewriter({
    words: ["Super Fast Delivery", "Original Brand Guaranteed", "Best Price", "Lifetime Battery"],
    loop: 0,
  });

  return (
    <div className="my-[200px] text-center text-white">
      <h1 className="text-4xl fw-bold">Reasons You'll Enjoy Shopping With Us</h1>
      <h1 className="text-4xl fw-bold my-2">We have <span className="text-yellow-600 uppercase text-5xl">{text}</span></h1>
    </div>
  );
}
