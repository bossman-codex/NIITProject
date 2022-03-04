import React from 'react'
import "./SecondNav.scss"
import  {Link} from "react-router-dom"


function SecondNav() {
  return (
      <nav className="top-4 right-0 z-30 lg:z-40 " >
          <div style={{backgroundColor:"#232F3E"}} className="nav bg-yellow-600 shadow-lg   flex">
             
              
                 
              <div class="section">
                  <Link>
                   <p> Your Amazon.com</p>
                  </Link>
              </div>
              <div class="section">
                  <Link>
                   Today's Deals
                  </Link>
                 
              </div>
              <div class="section">
                  <Link>
                       Gift Cards & Registry
                  </Link>
                 
              </div>
              <div class="section">
                  <Link>
                  Sell
                  </Link>
                  
              </div>
              <div class="section">
                  <Link>
                     Help 
                  </Link>
                  
              </div>
              
          </div>
   </nav>
  )
}

export default SecondNav