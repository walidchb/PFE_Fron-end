import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <div className="productView">
      <div className="imageName">
        <img className="imageproduct" src={props.img} alt="" />
        <p>{props.name}</p>
      </div>

      <div className="flexprice">
        <h5>{props.price}</h5>
        <a href={"/" + props.id} className="addtobasket">
          Details
        </a>
      </div>
    </div>
  );
}

export default Product;
