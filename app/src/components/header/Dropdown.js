import React, { useState } from 'react';
import "./Dropdown.css"
import { NavLink } from 'react-router-dom';
import {RiAccountBoxFill} from "react-icons/ri"


const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
      <RiAccountBoxFill  size={35}/>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <ul>
            <li>
                <NavLink to="/membership"style={{textDecoration: "none"}}>Subscription</NavLink>
                </li>
                <li>
                <NavLink to="/about"style={{textDecoration: "none"}}>About</NavLink>
                </li>               
        
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
