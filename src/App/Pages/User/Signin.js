import React from "react";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex flex-col justify-center min-h-screen items-center pt-20">
        <div className="w-1/2">
          <h1 className="text-4xl font-medium mb-4">SIGNUP</h1>
          <input
            name="name"
            className="mb-5 block w-full text-gray-700 bg-gray-100 border-0  rounded py-4 px-4  my-3 leading-tight focus:outline-none focus:bg-gray-200"
            type="text"
            placeholder="Full Name"
          />
          <input
            name="email"
            className="mb-5 block w-full text-gray-700 bg-gray-100 border-0  rounded py-4 px-4  my-3 leading-tight focus:outline-none focus:bg-gray-200"
            type="email"
            placeholder="Email Address"
          />
          <input
            name="email"
            className="block w-full text-gray-700 bg-gray-100 border-0  rounded py-4 px-4  my-3 leading-tight focus:outline-none focus:bg-gray-200"
            type="password"
            placeholder="Password"
          />
          <div className="py-5 flex flex-row justify-between content-center">
            <div class="flex md:items-center mb-6">
              <label class=" block text-gray-800 ">
                <input class="mr-2 leading-tight" type="checkbox" />
                <span class="text-lg">Keep me Signed In!</span>
              </label>
            </div>
            <div class="text-lg">
              <Link to={"/forgotpassword"}>Forgot Password?</Link>
            </div>
          </div>
          <button className="bg-black w-full text-xl text-white border-2 border-black  font-bold py-4 px-4 rounded ">
            Create Account
          </button>
          <div className="mt-4 text-center">
            <p>
              Already a member?{"  "}
              <Link to="/user/login" className="text-sky-400">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
