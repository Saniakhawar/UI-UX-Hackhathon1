import React from "react";
import Product from "@/components/Product";
import ProductGrid from "@/components/ProductGrid";
import Summer from "@/components/Summer";
import Univers from "@/components/Univers";
import Practise from "@/components/Practise";


const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="mb-12">
        <Product />
      </div>

      {/* Product Grid */}
      <div className="mb-12">
        <ProductGrid />
      </div>

      {/* Summer Slide */}
      <div className="mb-12">
        <Summer />
      </div>

      {/* Univers Slide */}
      <div className="mb-12">
        <Univers />
      </div>

      {/* Practise Slide */}
      <div className="mb-12">
        <Practise />
      </div>

     
    </div>
  );
};

export default HomePage;
