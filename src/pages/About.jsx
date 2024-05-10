import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="bg-cyan-600 min-h-screen w-full">
      <Navbar />
      <div>
        <h1 className="text-red-600 font-bold text-2xl ml-9 mt-4">About</h1>
        <p className="text-white ml-9 mt-4">
          Aplikasi ini dibuat untuk memenuhi tugas UTS mata kuliah praktikum
          sistem multimedia.
        </p>
      </div>
    </div>
  );
};

export default About;
