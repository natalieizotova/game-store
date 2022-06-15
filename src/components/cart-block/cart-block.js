import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./cart-block.css";
import { BiCart } from "react-icons/bi";
import { calcTotalPrice } from "../utils";
import CartMenu from "../cart-menu/cart-menu";
import { ItemsInCart } from "../items-in-cart";


export const CartBlock = () => {
  const [isCartMenuVisible, setCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();
  const handleClick = useCallback(()=>{
    setCartMenuVisible(false);
    navigate('./order')
  }, [navigate]);
  
  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCart
        size={30}
        className="cart-block_item"
        onClick={() => setCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block_total-price">${totalPrice}</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
