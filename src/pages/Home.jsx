import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-cyan-600 min-h-screen">
      <Navbar />
      <div className="">
        <h1 className="text-zinc-100 font-bold text-2xl ml-9 mt-4">Home</h1>
        <div className="flex flex-col gap-10">
          <div className="flex  items-center gap-4 mt-2 mx-auto ml-9">
            <h1 className="text-white">Pilih Resize: </h1>
            <button className="bg-zinc-100 text-dark font-medium py-2 px-4 rounded-lg hover:bg-cyan-500 transition duration-300">
              <a href="/upscale">Upscale</a>
            </button>
            <button className="bg-zinc-100 text-dark font-medium py-2 px-4 rounded-lg hover:bg-cyan-500 transition duration-300">
              <a href="/compress">Compress</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
