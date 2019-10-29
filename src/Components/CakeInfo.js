import React from "react";
import "./CardInfoStyle.css";
const CakeInfo = props => {
  const { cake } = props;
  const { title, desc, image } = cake;
  return (
    <div className="card-info">
      <h2>{title}</h2>
      <p>{desc}</p>
      <img src={image}></img>
    </div>
  );
};
export default CakeInfo;
