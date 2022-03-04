import React, { useState ,useEffect } from 'react'
import {commerce} from "../../lib/commerce"
import { useParams } from "react-router-dom"
import Brands from './Brands';



function Brand({getCurrentItem}) {
    const [Brand, setBrand] = useState([])

    let { name } = useParams();
  
    
    useEffect(() => {
         commerce.products.list({ query: name, })
            .then(response => setBrand(response.data));
    } ,[] );
   
   

  return (
      <div>
           <Brands
                getCurrentItem={getCurrentItem}
                BrandList={Brand}
              />
    </div>
  )
}

export default Brand