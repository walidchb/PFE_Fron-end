import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import Commande from "../Commande/Commande";
import { connect } from "react-redux";
import { clearCart } from "../../store/actions/actions";

function Cart(props) {
  function placeOrder() {
    // send the request to the server
    // clear cart
    props.clearCart();
    alert("We recieved your order, and we are working on it.");
  }
  return (
    <div className="CartPage">
      <div className="Your_Order_Items">
        <h4>Your Order Items :</h4>{" "}
      </div>
      <div className="CartItemsDisplay">
        <Grid className="Grid" container justify="center" spacing={4}>
          {props.cartItems.map((item, index) => (
            <Grid
              className="productgrid"
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
            >
              <CartItem className="cardoverride" item={item} index={index} />
            </Grid>
          ))}
        </Grid>
        <h3 className="Total">Total : {props.total} DA</h3>
        <button
          className="btn btn-primary btn-block PlaceOrder"
          onClick={() => placeOrder()}
        >
          Place order
        </button>
        <Commande />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
    total: state.cart.reduce(
      (total, item) => total + item.quantity * parseInt(item.product.price),
      0
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
