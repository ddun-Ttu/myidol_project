import React, { useEffect, useState } from "react";

import { CartModal, CartOverlay } from "./CartComponentStyle";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    console.log("클릭노우", isOpen);
  };
  return (
    <>
      <CartOverlay isOpen={isOpen} onClick={closeModal} />
      <CartModal>
        {/* Content of the shopping cart modal */}
        <h2>Shopping Cart</h2>
        {/* Add your cart items and total here */}
      </CartModal>
    </>
  );
};

export default Cart;
