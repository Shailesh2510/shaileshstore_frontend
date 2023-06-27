import React, { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import ShippingForm from "./ShippingForm";
import home from "../Home/Home"
import "./Cart.scss";

const Cart = () => {
  const { cartItems, setShowCart, cartSubTotal } = useContext(Context);
  const navigate = useNavigate();
  const [showShippingForm, setShowShippingForm] = useState(false);

  const handleCheckout = () => {
    setShowCart(false);
    navigate("/login");
  };

  return (
    <div className="cart-panel">
      <div className="opac-layer" onClick={() => setShowCart(false)}></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose className="close-btn" />
            <span className="text">close</span>
          </span>
        </div>

        {!cartItems.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart.</span>
            <button className="return-cta" onClick={() => {<home/>}}>
              RETURN TO SHOP
            </button>
          </div>
        )}

        {!!cartItems.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#8377;{cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {showShippingForm && <ShippingForm />}
    </div>
  );
};

export default Cart;
