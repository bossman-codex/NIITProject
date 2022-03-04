import React from "react";
import { useParams } from "react-router-dom";

// Importing the Product
import Products from "../Products/Products";

const Brands = ({ getCurrentItem, BrandList }) => {
    let {name} =useParams()
  return (
    <div className="pt-8 px-6">
      <div className="lg:container mx-auto laptops-cmp">
        <div>
          {/* All about the title Section */}
          <div className="title py-5 pt-8">
            <div className="flex  text-gray-900 text-xl md:text-2xl">
             
                          <h2>Popular Brands </h2>
                          
                      </div>

                       <div className="flex items-center justify-center text-gray-900 text-xl md:text-3xl">
             
                           <h4>{ name }</h4>
                          
                      </div>
                      
                     
          </div>
        </div>

        {/* Laptops Product Sections */}
        <div className="laptops py-8">
          <div className="e__grid--container">
            {BrandList.length === 0 ? null : (
              <div>
                <div className="e__grid-container text-center">
                  {BrandList.map((brand) => (
                    <Products
                      key={brand.id}
                      laptop={brand}
                      getCurrentItem={getCurrentItem}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
