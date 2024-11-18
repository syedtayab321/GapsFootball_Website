import React from "react";
import {Link} from "react-router-dom";
import './../../css/common/topbar.css'
const TopBar = () => {
  return (
    <div className="top-bar">
      <Link to="/">Limited Offer: Book Now and Get 10% Off!</Link>
    </div>
  );
};

export default TopBar;
