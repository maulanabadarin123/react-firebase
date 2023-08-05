import React, { useState } from "react";
import loginIlustration from "./70.png";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useSignOut,
} from "react-firebase-hooks/auth";
import auth from "../FirebaseConfig";

const Register = () => {
  const navigate = useNavigate();
  const [updateProfile] = useUpdateProfile(auth);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signOut] = useSignOut(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user && user.user) {
    return (
      <div>
        <p>Registered User: {user.user.email}</p>
      </div>
    );
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    createUserWithEmailAndPassword(email, password)
      .then(() => {
        handleUpdateProfile(displayName);
        console.log(user);
        setDisplayName("");
        signOut();
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateProfile = (name) => {
    updateProfile({ displayName: name })
      .then(() => {
        console.log("profile updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="container-lg p-4 rounded-lg flex justify-center items-center">
        <div className="w-full hidden md:block md:w-1/2 text-white">
          <img src={loginIlustration} alt="" />
        </div>
        <div className="w-full md:w-1/2 max-w-md">
          <h2 className="text-white text-2xl mb-8 text-center font-semibold">
            Register to see product details
          </h2>
          <form className="flex flex-col items-center">
            <div className="mb-4 w-full">
              <input
                type="text"
                id="name"
                name="name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full bg-gray-800 text-white py-2 px-3 rounded-lg text-md"
                placeholder="Input your name"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full bg-gray-800 text-white py-2 px-3 rounded-lg text-md"
                placeholder="Input your Email"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full bg-gray-800 text-white py-2 px-3 rounded-lg"
                placeholder="Input your password"
              />
            </div>
            <button
              type="submit"
              onClick={handleRegister}
              className="bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded-full mt-4 w-full"
            >
              Sign Up
            </button>
            <Link to="/login" className="flex justify-center items-center mt-4">
              <hr className="border-gray-400 border-1 w-20 mr-4" />
              <p className="text-gray-400 font-bold">Sign In</p>
              <hr className="border-gray-400 border-1 w-20 ml-4" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
