// components/EditorsPick.tsx
import React from "react";
import Image from "next/image";

const Product: React.FC = () => {
  return (
    <section
      className="text-center py-12 mx-auto"
      style={{
        width: "1050px", // Fixed width of the container
        height: "870px", // Fixed height of the container
        padding: "80px 0", // Padding for top and bottom
        gap: "48px", // Gap between items
        opacity: 1, // Opacity set to 1 for visibility
      }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-2">EDITOR’S PICK</h2>
      <p className="text-gray-600 mb-8">Problems trying to resolve the conflict between</p>

      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto">
        {/* MEN */}
        <div className="relative group col-span-2 md:col-span-1 mb-6">
          <Image
            src="/img1.png"
            alt="Men"
            width={510}
            height={510} // Ensure equal height to the image
            className="rounded-lg object-cover w-full h-full" // Fill container with object-cover
          />
        </div>

        {/* WOMEN */}
        <div className="relative group col-span-2 md:col-span-1 mb-6">
          <Image
            src="/img2.png"
            alt="Women"
            width={510}
            height={510} // Ensure equal height to the image
            className="rounded-lg object-cover w-full h-full" // Fill container with object-cover
          />
        </div>

        {/* ACCESSORIES & KIDS combined */}
        <div className="relative group col-span-1 md:col-span-1">
          {/* ACCESSORIES */}
          <div className="relative mb-6">
            <Image
              src="/img3.png"
              alt="Accessories"
              width={240}
              height={240} // Ensure equal height to the image
              className="rounded-lg object-cover w-full h-full" // Fill container with object-cover
            />
          </div>

          {/* KIDS */}
          <div className="relative">
            <Image
              src="/img4.png"
              alt="Kids"
              width={240}
              height={240} // Ensure equal height to the image
              className="rounded-lg object-cover w-full h-full" // Fill container with object-cover
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-md shadow-md">
              KIDS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
