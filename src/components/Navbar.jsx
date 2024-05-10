import React from "react";

const Navbar = () => {
  return (
    <div className="bg-red-700 py-5 flex  gap-4">
      <div className="w-1/2 flex justify-start items-start ml-10">
        <h1 className="text-white font-bold ">
          Geprek <span className="text-cyan-300">image</span>
        </h1>
      </div>

      <div className="w-1/2 flex gap-4 items-end justify-end mr-10">
        <h1 className=" font-bold text-white hover:text-cyan-500 ">
          <a href="/">Home</a>
        </h1>
        <h1 className=" font-bold text-white hover:text-cyan-500 ">
          <a href="/about">About</a>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
