import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase/firebase";
import logo from "../../../assets/Icons/NavLogo.svg";
import Cart from "../Cart/CartComponent";

import {
  Nav,
  NavUl,
  NavLi,
  NavA,
  EmptyCenter,
  NavP,
  NavLogo,
  CartA,
} from "./MainNavStyle";
import {
  CartModal,
  CartOverlay,
  CloseButton,
} from "../Cart/CartComponentStyle";

const MainNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
      })
      .catch((error: any) => {
        console.error("Error signing out: ", error);
      });
    setIsLoggedIn(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const buttonModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <Nav>
        <NavUl>
          <NavLi>
            <NavA to="/">
              <NavLogo src={logo} alt="logo" />
            </NavA>
          </NavLi>
          <EmptyCenter />

          <NavLi>
            <CartA onClick={buttonModal}>
              <NavP>장바구니</NavP>
            </CartA>
          </NavLi>

          <NavLi>
            <NavA to="/">
              <NavP>내정보</NavP>
            </NavA>
          </NavLi>

          {isLoggedIn ? (
            <NavLi>
              <NavA onClick={handleLogout} to="/">
                <NavP>로그아웃</NavP>
              </NavA>
            </NavLi>
          ) : (
            <NavLi>
              <NavA to="/login">
                <NavP>로그인</NavP>
              </NavA>
            </NavLi>
          )}
        </NavUl>
      </Nav>
      {isOpen && (
        <>
          <CartOverlay>
            <CartModal>
              <Cart />
              <CloseButton onClick={buttonModal}>❌</CloseButton>
            </CartModal>
          </CartOverlay>
        </>
      )}
    </>
  );
};

export default MainNav;
