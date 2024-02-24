import React, { useEffect, useState } from "react";

import { CartModal, CartOverlay, CloseButton } from "./CartComponentStyle";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    console.log("클릭노우", isOpen);
  };

  return (
    <>
      <CartOverlay>
        <CartModal>
          <h2>장바구니</h2>
          <CloseButton onClick={closeModal}>❌</CloseButton>
        </CartModal>
      </CartOverlay>
    </>
  );
};

export default Cart;
