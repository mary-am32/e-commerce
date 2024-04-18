import React from "react";
import "./descriptionbox.css";

const DescrptuonBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is on online platform that facilitaty buying and
          selling of product or services over the internet{" "}
        </p>
        <p>E-commerce websites typically display product or services </p>
      </div>
    </div>
  );
};

export default DescrptuonBox;
