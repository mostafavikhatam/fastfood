import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    
      <nav className="Nav__container">
        <div className="logo__container">
          <img
            src="./public/Images/LogoNav.jpg"
            alt="Logo"
            className="logoimage"
          />
        </div>
        <div className="pages_container">
          <ul className="pages">
            <li className="page">
              <Link to={"/"} className="text__page">Home</Link>
            </li>
            <li className="page">
              <Link to={"/menu"} className="text__page">Menu</Link>
            </li>
            <li className="page">
              <Link to={"/about"} className="text__page">About</Link>
            </li>
            <li className="page">
              <Link to={"/contact"} className="text__page">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    
  );
}
