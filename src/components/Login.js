import React, { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginIlustration from "./70.png";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../FirebaseConfig";
// import { GithubAuthProvider } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const location = useLocation();
  // const provider = new GithubAuthProvider();

  const from = location.state?.from?.pathname || "/";

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
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log(user);
        console.log("you are logged in");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(email);
      alert("Password reset email sent!");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="container-lg p-4 rounded-lg flex justify-center items-center">
        <div className="w-full hidden md:block md:w-1/2 text-white">
          <img src={loginIlustration} alt="" />
        </div>
        <div className="w-full md:w-1/2 max-w-md">
          <h2 className="text-white text-2xl mb-8 text-center font-semibold">
            Login to see product details
          </h2>
          <form className="flex flex-col items-center">
            <div className="mb-4 w-full">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-800 text-white py-2 px-3 rounded-lg"
                placeholder="Input your password"
              />
            </div>
            <div className="flex justify-between w-full -mt-2">
              <button
                className="text-white text-sm hover:text-yellow-500"
                onClick={handleResetPassword}
              >
                Reset Password
              </button>
              <Link to="/register" className="text-white text-sm hover:text-yellow-500">
                Register
              </Link>
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              className="bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded-full mt-4 w-full"
            >
              Login
            </button>
            <div className="flex justify-center items-center mt-4">
              <hr className="border-gray-400 border-1 w-20 mr-4" />
              <p className="text-gray-400 font-bold">OR LOGIN WITH</p>
              <hr className="border-gray-400 border-1 w-20 ml-4" />
            </div>
            <div className="flex justify-between w-full mt-8">
              <button
                type="button"
                onClick={() =>
                  signInWithGoogle().then(() => {
                    navigate(from, { replace: true });
                  })
                }
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded flex items-center justify-center w-1/2 mr-2"
              >
                <FaGoogle className="mr-2" />
                Login with Google
              </button>
              <button
                type="button"
                onClick={() =>
                  signInWithGithub().then(() => {
                    navigate(from, { replace: true });
                  })
                }
                className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded flex items-center justify-center w-1/2 ml-2"
              >
                <FaGithub className="mr-2" />
                Login with Github
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
