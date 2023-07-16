// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
// import { useEffect } from "react";
// import {BiMessageSquareAdd} from 'react-icons/bi'
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme, themeReducer } from "../../Redux/slices/themeSlice";
// import { resetDetails } from "../../Redux/slices/userSlice";


// function Navbar() {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const [hamBurger,setHamBurger] = useState({
//     mainMenu : false
//   })

//   const theme = useSelector(themeReducer)

//   useEffect(() => {
//     if (theme.dark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [theme.dark]);

//   const handleThemeButton = async()=>{
//     dispatch(toggleTheme())
//   }

//   return (
//     <div>
//       <nav className=" bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900  w-full z-20 top-0 left-0 ">
//         <div className="container flex flex-wrap items-center justify-between mx-auto">
//           <Link className="flex items-center">
//             <img
//               src="./Images/LOGO.png"
//               className="h-6 mr-3 sm:h-9"
//               alt="Flowbite Logo"
//             />
//             <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
//               Swarm
//             </span>
//           </Link>
//           <div className="flex md:order-2 gap-4">
//             <div className="bg-gray-700 rounded-lg mt-0.5 hover:cursor-pointer h-9 w-9 flex justify-center items-center" onClick={handleThemeButton}>
//               {theme.dark ? (
//                 <BsSunFill
                  
//                   className="text-white"
//                 />
//               ) : (
//                 <BsFillMoonFill
//                   className="text-white"
//                 />
//               )}
//             </div>
            
//             <Link
//               type="button"
//               className="hidden md:flex text-white gap-1 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-700 dark:hover:bg-green-900 dark:focus:ring-green-800"
//               to={'/project/create'}
//             >
//               <BiMessageSquareAdd className="text-xl"/>
//               Create
//             </Link>
//           </div>
          
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

// import React from "react";

// export default function Navbar({ fixed }) {
//   const [navbarOpen, setNavbarOpen] = React.useState(false);
//   return (
//     <>
//       <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-600 mb-3">
//         <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
//           <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
//             <a
//               className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
//               href="#pablo"
//             >
//               SHIFT MATE
//             </a>
//             <button
//               className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
//               type="button"
//               onClick={() => setNavbarOpen(!navbarOpen)}
//             >
//               <i className="fas fa-bars"></i>
//             </button>
//           </div>
//           <div
//             className={
//               "lg:flex flex-grow items-center" +
//               (navbarOpen ? " flex" : " hidden")
//             }
//             id="example-navbar-danger"
//           >
//             <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
//               <li className="nav-item">
//                 <a
//                   className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//                   href="#pablo"
//                 >
//                   <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Share</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//                   href="#pablo"
//                 >
//                   <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Tweet</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//                   href="#pablo"
//                 >
//                   <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

import React from "react";

// import UserDropdown from "./UserDropdown.js";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-black  md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            SHIFT MATE
          </a>
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-black bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input type="text" placeholder="Search here..." className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"/>
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden  md:flex">
            {/* <UserDropdown /> */}
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}