import React, { useState ,useEffect } from 'react'
import {commerce} from "../../lib/commerce"
import { useParams } from "react-router-dom"
import Section from './Section';



function MainSection({getCurrentItem}) {
    const [section, setSection] = useState([])

    let {name } = useParams();
   console.log(name)
    
    useEffect(() => {
          commerce.products
      .list({ category_slug: name })
      .then((response) => setSection(response.data));
  }, []);
    
   
   

  return (
      <div>
           <Section
                getCurrentItem={getCurrentItem}
                ProductList={section}
              />
    </div>
  )
}

export default MainSection