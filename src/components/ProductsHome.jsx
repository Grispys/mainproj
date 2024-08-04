import React, { useEffect } from 'react';
import '../App.css';

const ProductsHome = () => {
  useEffect(() => {
    const loadProductJson = async () => {
      try {
        const response = await fetch("http://localhost:5000/items");
        // Make sure the response is ok before parsing
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        let output = "";
        data.forEach((product) => {
          output += `Item Description: ${product.name}, ${product.price}, ${product.desc}, ${product.image}\n`;
        });
        console.log(output);
      } catch (error) {
        console.error("There was an error:", error);
      }
    };
    loadProductJson();
  }, []);

  return (
    <div className='Body-stuff'>
      <div className='imgBox'></div>
      <div className='imgBox'></div>
      <div className='imgBox'></div>
      <div className='imgBox'></div>
      <div className='imgBox'></div>
      <div className='imgBox'></div>
      <div className='imgBox'></div>
      <div className='imgBox'></div>
      <div className='imgBox'></div>
      <div className='imgBox'></div>
      <div className='imgBox'></div>
      <div className='imgBox'></div>
    </div>
  );
};

export default ProductsHome;
