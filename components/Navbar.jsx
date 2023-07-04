import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Audio Hub</Link>
      </p>

      <button
        type="button"
        onClick={() => setShowCart(true)}
        className="cart-icon"
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
