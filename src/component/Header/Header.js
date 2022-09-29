import React from "react";
import logo from "../../image/logo (1).png";

const Header = () => {
  return (
    <div className="container">
      <div className="d-flex  align-items-center">
        <img src={logo} alt="" />
        <h1 className="text-success fst-italic">Work Out Your Way</h1>
      </div>
    </div>
  );
};

export default Header;
