import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ linkText, dropdownItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkHover = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownExit = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="dropdown-wrapper"
      onMouseEnter={handleLinkHover}
      onMouseLeave={handleDropdownExit}
    >
      <Link to={dropdownItems[0].href} onClick={(e) => e.preventDefault()}>
        {linkText}
        <ul className={`dropdown ${isDropdownOpen ? "show" : ""}`}>
          {dropdownItems.map((item) => (
            <li key={item.href}>
              <Link to={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
};

export default Dropdown;
