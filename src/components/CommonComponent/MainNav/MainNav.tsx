import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase/firebase";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  console.log(isLoggedIn);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
      })
      .catch((error : any) => {
        console.error("Error signing out: ", error);
      });
    setIsLoggedIn(false);
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
            <NavA to="/admin">
              <NavP>장바구니</NavP>
            </NavA>
          </NavLi>

          <NavLi>
            <NavA to="/">
              <NavP>내정보</NavP>
            </NavA>
          </NavLi>
        </NavUl>
      </Nav>
    </>
  );
};

export default MainNav;
