import React from "react";
import { montserrat, opensans } from "../aboutus/about";

function Subscribe() {
  return (
    <div className="px-12 rounded-3xl">
      <div
        className={`px-12 py-20 flex ${montserrat.className} rounded-3xl mt-48 bg-[rgba(255,255,255,.05)]  bg-[url(https://assets-global.website-files.com/64d34f2a6cc55497367eda5e/64dcf128eb48dafb565f6e46_BlueStroke%402x-1.webp)]`}
      >
        <div className="w-1/2">
          <h3 className="text-4xl">Latest episodes direct to your inbox</h3>
          <p className={`${opensans.className} text-lg`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Enter your email"
              className="  rounded-3xl px-16 py-2 bg-[#4A4A4A]"
            />
            <button
              type="button"
              className="px-4 py-3 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 w-[25%]"
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs font-medium w-2/3">
            By clicking Sign Up youre confirming that you agree with our{" "}
            <span className="text-[#00ffff]">Terms and Conditions.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
