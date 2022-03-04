import React from "react";
import "./Explore.scss"
import {Link} from "react-router-dom"


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
        <Link to="/brands/Apple">
        <div>
          <img className="explore_image"  src="https://i.ebayimg.com/images/g/T38AAOSwPGBeJrV1/s-l200.webp" alt="" /> 
          <p className="explore_text">Apple</p>
        </div>
        </Link>
        
         <Link to={`/brands/Samsung`}>
         <div>
          <img className="explore_image"  src="https://i.ebayimg.com/images/g/BkwAAOSwpfpeJrV0/s-l200.webp" alt="" /> 
          <p className="explore_text">Samsung</p>
        </div>
        </Link>
       
        
        <Link to={`/brands/Sony`}>
          <div>
          <img className="explore_image" src="https://i.ebayimg.com/images/g/uIAAAOSw7PNeJrV1/s-l200.webp" alt="" /> 
          <p className="explore_text">Sony</p>
        </div>
         </Link>
        
        <Link to={`/brands/Xiaomi`}>
          <div>
          <img className="explore_image" src="https://i.ebayimg.com/images/g/pq0AAOSwOFFeJrV0/s-l200.webp" alt="" /> 
          <p className="explore_text">Xiaomi</p>
        </div>
         </Link>
        
        <Link to={`/brands/Apple`}>
           <div>
          <img className="explore_image"  src="https://i.ebayimg.com/images/g/dLMAAOSwwS5eJrV0/s-l200.webp" alt="" /> 
          <p className="explore_text">Oriamo</p>
        </div>
         </Link>
       
        
   </div>
    </div>
   
  );
};

export default Explore;
