import React from "react";

import logo from "../../../assets/Icons/NavLogo.svg";

import {
  Nav,
  NavUl,
  NavLi,
  NavA,
  EmptyCenter,
  NavP,
  NavLogo,
} from "./MainNavStyle";

const MainNav = () => {
  return (
    <>
      <Nav>
        <NavUl>
          <NavLi>
            <NavA to="/">
              <NavLogo src={logo} alt="logo"></NavLogo>
            </NavA>
          </NavLi>
          <EmptyCenter />

          <NavLi>
            <NavA to="/admin">
              <NavP>장바구니</NavP>
            </NavA>
          </NavLi>

          <NavLi>
            <NavA to="/">
              <NavP>내정보</NavP>
            </NavA>
          </NavLi>

          <NavLi>
            <NavA to="/login">
              <NavP>로그인</NavP>
            </NavA>
          </NavLi>
        </NavUl>
      </Nav>
    </>
  );
};

export default MainNav;
