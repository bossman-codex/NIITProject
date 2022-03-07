import React,{useEffect , useState} from "react";
import "./Navbar.scss";
import Sidebar from "../Sidebar";
import { commerce } from "../../lib/commerce";


//Importing this way so the I can use both the links
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";

const Navbar = ({ total_items  , getCurrentItem}) => {

  const [search, setSearch] = useState("") 
  // eslint-disable-next-line no-unused-vars
  const [Brand , setBrand] =useState("")
  
  useEffect(() => {
         commerce.products.list({ query: search, })
            .then(response => setBrand(response.data));
    } );

  
  return (
    

    <nav className=" nav bg-black py-6 px-6">
      <div className="lg:container mx-auto text-gray-100 flex items-center justify-between">
        <span style={{paddingRight: 10} }>
           <Sidebar />
        </span>
       
        <div>
          <h4 className="font-bold" style={{paddingRight: 10} }>
            <Link to="/">TechStore</Link>
          </h4>
        </div>
        <div className="searchbar">
          <input style={{color:"black"}} className="search__input" type="text" onChange={e => setSearch(e.target.value)} />
           <Link to={`/brands/${search}`}>
              <button className="button">Search</button>
            </Link>
        </div>
            
        <ul className="flex items-center text-gray-400 py-1">
          <li className="px-3 hover:text-gray-100  cursor-pointer">
            <Link to="/Category/laptop" spy={true} smooth={true} duration={600}>
              Laptops
            </Link>
          </li>
           <li className="px-3 hover:text-gray-100  cursor-pointer">
            <Link to="/Category/phone" spy={true} smooth={true} duration={600}>
              Phones
            </Link>
          </li>
           <li className="px-3 hover:text-gray-100  cursor-pointer">
            <Link to="/Category/headphone" spy={true} smooth={true} duration={600}>
              HeadPhones
            </Link>
          </li>
          <li className="px-3 pr-6 hover:text-gray-100 cursor-pointer">
            <Link to="/Category/games" spy={true} smooth={true} duration={900}>
              Games
            </Link>
          </li>
          <li className="e_cart">
            <Link to="/cart" className="cursor-pointer">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="#eeeeff"
                >
                  <path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z" />
                </svg>
              </span>
            </Link>
            <span className="e_cart_num">{total_items}</span>
          </li>
        </ul>
     
      </div>
    </nav>
  );
};

export default Navbar;
