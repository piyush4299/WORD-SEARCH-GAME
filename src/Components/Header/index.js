import React from "react";
import "./style.css";

const Header = ({ gameName }) => {
  return (
    <div className="header">
      <p>{gameName} Word Search</p>
    </div>
  );
};

export default Header;
