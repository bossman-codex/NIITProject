import React from "react";
import { Link as PageLink } from "react-router-dom";
import "./Products.scss";

const Products = ({ laptop, getCurrentItem }) => {
  const getTheCurrentItem = (e_item) => {
    getCurrentItem(e_item);
  };
  return (
    <>
      <PageLink
            to="/specs"
            onClick={() => {
              getTheCurrentItem(laptop);
            }}
          >
      <div key={laptop.id} className="flex flex-col justify-between p-4">
        <div className="img_home">
          <img className="img__main" src={laptop.image.url} alt="laptop.name" />
        </div>
        <div className="h-full py-2 flex flex-col justify-between items-center">
          <div>
              <h2 className=" text pb-2 px-5">{laptop.name}</h2>
              {/* <span>...</span> */}
          </div>
          <h4 className="text-xl font-black">
            {laptop.price.formatted_with_symbol}
          </h4>
        </div>
        <div className="py-2">
          <PageLink
            className="px-6 py-2 inline-block hover:bg-gray-900 hover:text-gray-100 border-gray-500 rounded-full border"
            to="/specs"
            onClick={() => {
              getTheCurrentItem(laptop);
            }}
          >
            Show Specs
          </PageLink>
        </div>
        </div>
        </PageLink>
    </>
  );
};

export default Products;
