import React from "react";
import Image from "next/image";

const NeuralUniverseSlide: React.FC = () => {
  return (
    <section
      className="w-[1439px] h-auto rounded-[5px] border-[1px] border-gray-400 bg-white flex justify-center items-center mt-10 mx-auto"
      style={{
        padding: "80px 10px", // Reduced padding for more space on the left side
        gap: "30px", // Reduced gap between text and image
        opacity: 1, // Ensures the section is visible
      }}
    >
      {/* Left Side - Image */}
      <div className="w-[50%]">
        <Image
          src="/img14.png" // Replace with your image
          alt="Neural Universe"
          width={510}
          height={682} // Set height to match the content
          className="object-cover rounded-md"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-[50%] text-gray-800">
        <h3 className="text-xl font-bold">Summer 2020</h3>
        <h2
          className="text-3xl font-bold mt-2"
          style={{
            fontFamily: "Montserrat",
            fontSize: "58px",
            fontWeight: "700",
            lineHeight: "80px",
            letterSpacing: "0.2px",
            textAlign: "left",
            textDecorationSkipInk: "none",
          }}
        >
          Part of Neural Universe
        </h2>
        <p className="text-sm mt-4">
          We know how large objects will act, but things on a small scale behave
          differently.
        </p>

        <div className="flex items-center mt-6">
          <button className="bg-[#2DC071] text-white px-6 py-2 mr-4 rounded-md">
            Buy Now
          </button>
          <button className="border-[#2DC071] border-2 text-[#2DC071] px-6 py-2 rounded-md">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default NeuralUniverseSlide;