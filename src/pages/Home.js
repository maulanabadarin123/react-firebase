import React from "react";
import Brand from "../components/Brand";
import Hero from "../components/Hero";
import Type from "../components/Typed";
import ProductList from "../components/ProductList";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../FirebaseConfig";
import Reviews from "../components/CustomerReview";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <>
      <Hero />
      <Brand />
      <ProductList />
      <Type />
      <Reviews />
    </>
  );
}
