// import React, {useState} from 'react';
// import {Transition} from 'react-transition-group';
// import "./Categories.scss"
// import HamburgerButton from '../HamburgerButton';
// import Sidenav from '../Sidenav';
// import { useAmazonContext } from '../Context/AmazonContext';

// function Categories() {
//   const [navOpen, setNavOpen] = useState(false);
//   const {setSubContainer} = useAmazonContext();

//   const openNav = () => {
//       setNavOpen(true);
//   }

//   const closeNav = () => {
//     setNavOpen(false);
    
//   }

//   const {entryStore} = useAmazonContext();

//   return (
//     <div className="App">
//       <HamburgerButton click={openNav} />
//       <Transition
//       in={navOpen && entryStore}
//       timeout={300}
//       mountOnEnter
//       unmountOnExit>
//       {state => {
//         if(state === "exited")  setSubContainer(false);
//         return(
//         <>
//         <Sidenav state={state} />
//         <div className="overlay" 
//         style={state === "entering" ? {animation: "show .3s forwards"} 
//         : state === "entered" ? {opacity: "1"} : {animation: "show .3s backwards reverse"}}
//         onClick={closeNav}></div>
//         <div className="closeBtn" style={state === "entering" ? {animation: "show .3s forwards"} 
//         : state === "entered" ? {opacity: "1"} : {animation: "show .3s backwards reverse"}}
//         onClick={closeNav}>&times;</div>
//       </>
//       )}}
//       </Transition>
//     </div>
//   );
// }

// export default Categories;
