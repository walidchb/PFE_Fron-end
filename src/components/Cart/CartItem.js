import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/actions";

function CartItem(props) {
  const { item, index } = props;
  const { product } = item;
  return (
    <div className="productView">
      <div className="imageName">
        <img className="imageproduct" src={product.img} alt="" />
        <p>{product.name}</p>
      </div>

      <p className="card-text">
        Price {product.price}
        <br />
        Quantity: {item.quantity}
        <br />
        Total: {item.quantity * parseInt(product.price)} DA
      </p>
      <button
        className="btn btn-danger"
        onClick={() => props.removeFromCart(index)}
      >
        <i className="fa fa-trash"></i> Delete
      </button>
    </div>
  );
}

export default connect(null, { removeFromCart })(CartItem);
