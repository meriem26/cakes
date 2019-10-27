import React from "react";
import "./CardInfoStyle.css";

const CardInfo = props => {
  const { cake = {} } = props;
  const { title, desc, image } = cake;
  return (
    <div className="card-info">
      <li>{title}</li>
      <p>{desc}</p>
      <img src={image} />
    </div>
  );
};
export default CardInfo;
