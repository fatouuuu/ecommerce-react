import React from "react";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";
import { useSelector, useDispatch } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";
import { emptyCart } from "../redux/actions";

function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleDeselectClick = () => {
    dispatch(emptyCart());
  };

  return (
    <div className="checkout">
    <div className="checkout__left">
        <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="ad"
        />

        <div className="checkout__header">
          <h2 className="checkout__title">Shopping Cart</h2>
          <button onClick={handleDeselectClick}>Deselect all items</button>
        </div>

        <div className="checkout__products">
          {cart?.map((item, index) => 
            <CheckoutProduct
              id={item.id}
              cartId={index}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          )}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;