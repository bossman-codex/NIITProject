import React from 'react'
import Categories from '../Catergories/Categories'

function SecondNav() {
  return (
      <nav className="top-4 right-0 z-30 lg:z-40 w-full " >
          <div style={{backgroundColor:"gray"}} className="nav w-full bg-yellow-600 shadow-lg flex items-center justify-between px-2 flex">
              <Categories/>
          </div>
   </nav>
  )
}

export default SecondNav