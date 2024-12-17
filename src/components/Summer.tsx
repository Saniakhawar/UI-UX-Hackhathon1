import React from 'react';
import Image from 'next/image';

const Summer2020Slide: React.FC = () => {
  return (
    <section
      className="w-[1446px] h-[709px] rounded-[5px] border-[1px] border-gray-400 bg-[#23856D] flex justify-center items-center px-20 mt-10 mx-auto" // Center content horizontally and vertically
      style={{
        gap: "0",
        padding: '0',
        opacity: 1, // Ensures the section is visible
      }}
    >
      {/* Left Side - Text Content */}
      <div className="text-white w-[50%] text-center"> {/* Added text-center to center the text content */}
        <h3 className="text-xl font-bold">Summer 2020</h3>
        <h2 
          className="text-3xl font-bold mt-2" 
          style={{
            fontFamily: 'Montserrat', 
            fontSize: '58px', 
            fontWeight: '700', 
            lineHeight: '80px', 
            letterSpacing: '0.2px', 
            textAlign: 'center', // Centered the text
            textDecorationSkipInk: 'none',
          }}
        >
          Vita Classics Product
        </h2>
        <p className="text-sm mt-4 text-center">We know how large objects will act. We know how are objects will act. We know.</p>
        
        <div className="flex justify-center items-center mt-4">
          <div className="text-2xl font-bold">$16.48</div>
          <button className="bg-[#2DC071] text-white px-6 py-2 ml-4 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-[443px] h-[685px] relative flex justify-center items-center">
        <Image
          src="/img13.png" // Replace with your image
          alt="Summer 2020 Product"
          width={510}
          height={685}
          className="object-cover rounded-md"
        />
      </div>
    </section>
  );
};

export default Summer2020Slide;
