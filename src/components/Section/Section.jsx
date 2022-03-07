import React from 'react'
import Products from '../Products/Products'
import {useParams} from "react-router-dom"

function Section({ getCurrentItem, ProductList }) {
    let {name} = useParams()
  return (
         <div>
      <div className="lg:container mx-auto laptops-cmp">
        <div>
          {/* All about the title Section */}
          <div className="title py-5 pt-8">
            <div className="flex items-center justify-center text-gray-900 text-xl md:text-2xl">
                          <span>Category {'>'} { name}</span>
            </div>
          </div>
        </div>

        {/* Laptops Product Sections */}
        <div className="laptops py-8">
          <div className="e__grid--container">
            {ProductList.length === 0 ? null : (
              <div>
                <div className="e__grid-container text-center">
                  {ProductList.map((product) => (
                    <Products
                      key={product.id}
                      laptop={product}
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
  )
}
  

export default Section