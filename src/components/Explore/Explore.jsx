import React from "react";
import "./Explore.scss"


const Explore = () => {
  return (
    <div>
      <div className="explore">
         <span className="explore_headingOne">
        Explore Popular Brands
      </span>
      <span className="explore_headingTwo">| See All {">>"}</span>
      </div>
     
       <div className="explore_img">
        <div>
          <img className="explore_image"  src="https://i.ebayimg.com/images/g/T38AAOSwPGBeJrV1/s-l200.webp" alt="" /> 
          <p className="explore_text">Apple</p>
        </div>
        <div>
          <img className="explore_image"  src="https://i.ebayimg.com/images/g/BkwAAOSwpfpeJrV0/s-l200.webp" alt="" /> 
          <p className="explore_text">Samsung</p>
        </div>
        <div>
          <img className="explore_image" src="https://i.ebayimg.com/images/g/uIAAAOSw7PNeJrV1/s-l200.webp" alt="" /> 
          <p className="explore_text">Sony</p>
        </div>
        <div>
          <img className="explore_image" src="https://i.ebayimg.com/images/g/atoAAOSwZzVeJrV1/s-l200.webp" alt="" /> 
          <p className="explore_text">Nike</p>
        </div>
        <div>
          <img className="explore_image" src="https://i.ebayimg.com/images/g/pq0AAOSwOFFeJrV0/s-l200.webp" alt="" /> 
          <p className="explore_text">Xiaomi</p>
        </div>
        <div>
          <img className="explore_image"  src="https://i.ebayimg.com/images/g/dLMAAOSwwS5eJrV0/s-l200.webp" alt="" /> 
          <p className="explore_text">Oriamo</p>
        </div>
        
   </div>
    </div>
   
  );
};

export default Explore;
