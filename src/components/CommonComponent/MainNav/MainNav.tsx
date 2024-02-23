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

  const openModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    console.log("클릭", isOpen);
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

          <NavLi>
            <CartA onClick={openModal}>
              <NavP>장바구니</NavP>
            </CartA>
          </NavLi>

          <NavLi>
            <NavA to="/">
              <NavP>내정보</NavP>
            </NavA>
          </NavLi>
        </NavUl>
      </Nav>
      {isOpen && (
        <>
          <Cart />
        </>
      )}
    </>
  );
};

export default MainNav;
