// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css';
// import { useAuth } from '../store/auth';


// export const Navbar = () => {

//   const {isLoggedin} = useAuth();
  
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="navbar">
//       <div className="logo-brand">
//                 <NavLink to="/">Tech-Talks</NavLink>
//         </div>

//       <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
//         <NavLink to="/" onClick={toggleMenu}>
//           Home
//         </NavLink>
//         <NavLink to="/contact" onClick={toggleMenu}>
//           Contact
//         </NavLink>
//         <NavLink to="/addnews" onClick={toggleMenu}>
//          Add News
//         </NavLink>
//         <NavLink to="/logout" onClick={toggleMenu}>
//           Logout
//         </NavLink>
//         <NavLink to="/login" onClick={toggleMenu}>
//           Login
//         </NavLink>
//         <NavLink to="/signup" onClick={toggleMenu}>
//           SignUp
//         </NavLink>

//       {isLoggedin ? (

//         <>
//         <NavLink to="/signup"> Register </NavLink>
//           <NavLink to="/login"> Login </NavLink> 
//         </>
        
//       ) : (
//         <>
          
//           <NavLink to="/logout">Logout</NavLink>
//         </>
//       )}


//       </div>

//       <div className="menu-toggle" onClick={toggleMenu}>
//         <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
//         <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
//         <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../store/auth';

export const Navbar = () => {
  const { isLoggedin } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isLoggedin); 
  }, [isLoggedin]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo-brand">
        <NavLink to="/">Tech-Talks</NavLink>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>
          Contact
        </NavLink>
        <NavLink to="/addnews" onClick={toggleMenu}>
          Add News
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink to="/logout" onClick={toggleMenu}>
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/signup" onClick={toggleMenu}>
              Register
            </NavLink>
            <NavLink to="/login" onClick={toggleMenu}>
              Login
            </NavLink>
          </>
        )}
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
      </div>
    </div>
  );
};






