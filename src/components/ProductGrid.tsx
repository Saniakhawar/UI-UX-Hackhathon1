import React from 'react';
import NewProduct from './NewProduct';

const ProductGrid = () => {
  const products = [
    { key: 1, img: '/img5.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 2, img: '/img6.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 3, img: '/img7.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 4, img: '/img8.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 5, img: '/img9.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 6, img: '/img10.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 7, img: '/img11.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
    { key: 8, img: '/img12.png', title: 'Graphic Design', desc: 'English Department', price: '16.48', originalPrice: '21.00' },
  ];

  return (
    <div
      className="mx-auto"
      style={{
        width: '1124px', // Fixed width
        paddingTop: '80px',
        paddingBottom: '80px',
        marginLeft: '195px', // Left alignment
      }}
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-gray-600">FEATURED PRODUCT</h3>
        <h2 className="text-2xl font-bold text-gray-800 mt-1">BEST SELLER PRODUCT</h2>
        <p className="text-gray-500 mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div className="flex justify-center">
            <NewProduct
              key={product.key}
              img={product.img}
              title={product.title}
              desc={product.desc}
              price={product.price}
              originalPrice={product.originalPrice}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
