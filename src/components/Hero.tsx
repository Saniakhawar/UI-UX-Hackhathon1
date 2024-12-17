"use client";

import React from "react";

const Hero = () => {
  return (
    <div
      className="relative bg-lightblue h-screen flex items-center"
      style={{
        backgroundImage: `url('/banner.jpg')`, // Correct image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col justify-center h-full">
        {/* Content aligned to the center vertically */}
        <div className="text-left text-white space-y-4">
          <h1 className="text-5xl font-bold mb-4">NEW COLLECTION</h1>
          <p className="text-lg mb-4">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-green text-white py-2 px-6 text-lg">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
